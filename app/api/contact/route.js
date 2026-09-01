import { NextResponse } from 'next/server'
import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm'
import { Resend } from 'resend'

const ssm = new SSMClient({
  region: process.env.AWS_REGION || 'ap-southeast-2',
})

let resendApiKey

async function getResendApiKey() {
  if (resendApiKey) {
    return resendApiKey
  }

  const response = await ssm.send(
    new GetParameterCommand({
      Name: '/portfolio/resend-api-key',
      WithDecryption: true,
    })
  )

  if (!response.Parameter?.Value) {
    throw new Error('RESEND_API_KEY could not be loaded from SSM')
  }

  resendApiKey = response.Parameter.Value

  return resendApiKey
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function isValidEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function validatePayload({ name, email, message }) {
  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return 'Invalid request payload.'
  }

  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedMessage = message.trim()

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return 'All fields are required.'
  }

  if (trimmedName.length > 100) {
    return 'Name is too long.'
  }

  if (trimmedEmail.length > 254 || !isValidEmail(trimmedEmail)) {
    return 'Please enter a valid email address.'
  }

  if (trimmedMessage.length > 5000) {
    return 'Message is too long.'
  }

  return null
}

export async function POST(request) {
  try {
    const payload = await request.json()
    const { name, email, message: userMessage } = payload

    const validationError = validatePayload({
      name,
      email,
      message: userMessage,
    })

    if (validationError) {
      return NextResponse.json(
        {
          success: false,
          message: validationError,
        },
        { status: 400 }
      )
    }

    const cleanName = name.trim()
    const cleanEmail = email.trim()
    const cleanMessage = userMessage.trim()

    const safeName = escapeHtml(cleanName)
    const safeEmail = escapeHtml(cleanEmail)
    const safeMessage = escapeHtml(cleanMessage)

    const apiKey = await getResendApiKey()
    const resend = new Resend(apiKey)

    const html = `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #007BFF;">New Message Received</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
            ${safeMessage}
          </blockquote>
          <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
        </div>
      </div>
    `

    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.EMAIL_ADDRESS,
      subject: `New Message From ${cleanName}`,
      replyTo: cleanEmail,
      html,
    })

    if (error) {
      console.error('Resend error:', error)

      return NextResponse.json(
        {
          success: false,
          message: 'Unable to send your message.',
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. Thanks!',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('API Error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Server error occurred.',
      },
      { status: 500 }
    )
  }
}
