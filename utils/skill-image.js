import adobeXd from '../app/assets/svg/skills/adobe-xd.svg';
import adobeaudition from '../app/assets/svg/skills/adobeaudition.svg';
import afterEffects from '../app/assets/svg/skills/after-effects.svg';
import angular from '../app/assets/svg/skills/angular.svg';
import aws from '../app/assets/svg/skills/aws.svg';
import azure from '../app/assets/svg/skills/azure.svg';
import blender from '../app/assets/svg/skills/blender.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import bulma from '../app/assets/svg/skills/bulma.svg';
import c from '../app/assets/svg/skills/c.svg';
import canva from '../app/assets/svg/skills/canva.svg';
import capacitorjs from '../app/assets/svg/skills/capacitorjs.svg';
import coffeescript from '../app/assets/svg/skills/coffeescript.svg';
import cplusplus from '../app/assets/svg/skills/cplusplus.svg';
import csharp from '../app/assets/svg/skills/csharp.svg';
import css from '../app/assets/svg/skills/css.svg';
import dart from '../app/assets/svg/skills/dart.svg';
import deno from '../app/assets/svg/skills/deno.svg';
import django from '../app/assets/svg/skills/django.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import dotnet from '../app/assets/svg/skills/dotnet.svg';
import dotnetcore from '../app/assets/svg/skills/dotnetcore.svg'
import fastapi from '../app/assets/svg/skills/fastapi.svg'
import fastify from '../app/assets/svg/skills/fastify.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';
import flutter from '../app/assets/svg/skills/flutter.svg';
import gcp from '../app/assets/svg/skills/gcp.svg';
import gimp from '../app/assets/svg/skills/gimp.svg';
import git from '../app/assets/svg/skills/git.svg';
import go from '../app/assets/svg/skills/go.svg';
import graphql from '../app/assets/svg/skills/graphql.svg';
import haxe from '../app/assets/svg/skills/haxe.svg';
import html from '../app/assets/svg/skills/html.svg';
import illustrator from '../app/assets/svg/skills/illustrator.svg';
import ionic from '../app/assets/svg/skills/ionic.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import jest from '../app/assets/svg/skills/jest.png'
import julia from '../app/assets/svg/skills/julia.svg';
import kotlin from '../app/assets/svg/skills/kotlin.svg';
import kubernetes from '../app/assets/svg/skills/kubernetes.svg'
import lightroom from '../app/assets/svg/skills/lightroom.svg';
import linux from '../app/assets/svg/skills/linux.svg'
import markdown from '../app/assets/svg/skills/markdown.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import matlab from '../app/assets/svg/skills/matlab.svg';
import memsql from '../app/assets/svg/skills/memsql.svg';
import microsoftoffice from '../app/assets/svg/skills/microsoftoffice.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import nginx from '../app/assets/svg/skills/nginx.svg';
import numpy from '../app/assets/svg/skills/numpy.svg';
import nuxtJS from '../app/assets/svg/skills/nuxtJS.svg';
import opencv from '../app/assets/svg/skills/opencv.svg';
import pandas from '../app/assets/svg/skills/pandas.svg';
import photoshop from '../app/assets/svg/skills/photoshop.svg';
import php from '../app/assets/svg/skills/php.svg';
import picsart from '../app/assets/svg/skills/picsart.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import premierepro from '../app/assets/svg/skills/premierepro.svg';
import prisma from '../app/assets/svg/skills/prisma.svg';
import python from '../app/assets/svg/skills/python.svg';
import pytorch from '../app/assets/svg/skills/pytorch.svg';
import react from '../app/assets/svg/skills/react.svg';
import ruby from '../app/assets/svg/skills/ruby.svg';
import scikitlearn from '../app/assets/svg/skills/scikit-learn.svg';
import selenium from '../app/assets/svg/skills/selenium.svg';
import sketch from '../app/assets/svg/skills/sketch.svg';
import sqlalchemy from '../app/assets/svg/skills/sqlalchemy.svg'
import strapi from '../app/assets/svg/skills/strapi.svg';
import svelte from '../app/assets/svg/skills/svelte.svg';
import swift from '../app/assets/svg/skills/swift.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import tensorflow from '../app/assets/svg/skills/tensorflow.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import unity from '../app/assets/svg/skills/unity.svg';
import vitejs from '../app/assets/svg/skills/vitejs.svg';
import vue from '../app/assets/svg/skills/vue.svg';
import vuetifyjs from '../app/assets/svg/skills/vuetifyjs.svg';
import webix from '../app/assets/svg/skills/webix.svg';
import wolframalpha from '../app/assets/svg/skills/wolframalpha.svg';
import wordpress from '../app/assets/svg/skills/wordpress.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case '.net':
      return dotnet;
    case '.net core':
      return dotnetcore
    case 'adobe audition':
      return adobeaudition;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'angular':
      return angular;
    case 'aws':
      return aws;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'canva':
      return canva;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'css':
      return css;
    case 'dart':
      return dart;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'docker':
      return docker;
    case 'express':
      return express
    case 'fastapi':
      return fastapi;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'firebase':
      return firebase;
    case 'flutter':
      return flutter;
    case 'gcp':
      return gcp;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'go':
      return go;
    case 'graphql':
      return graphql;
    case 'haxe':
      return haxe;
    case 'html':
      return html;
    case 'ionic':
      return ionic;
    case 'illustrator':
      return illustrator;
    case 'java':
      return java;
    case 'javascript':
      return javascript;
    case 'jest':
      return jest;
    case 'julia':
      return julia;
    case 'kotlin':
      return kotlin;
    case 'kubernetes':
      return kubernetes;
    case 'lightroom':
      return lightroom;
    case 'linux':
      return linux;
    case 'markdown':
      return markdown
    case 'materialui':
      return materialui;
    case 'matlab':
      return matlab;
    case 'memsql':
      return memsql;
    case 'microsoft office':
      return microsoftoffice;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'next js':
      return nextJS;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'nuxt js':
      return nuxtJS;
    case 'opencv':
      return opencv;
    case 'pandas':
      return pandas;
    case 'photoshop':
      return photoshop;
    case 'php':
      return php;
    case 'picsart':
      return picsart;
    case 'postgresql':
      return postgresql;
    case 'premiere pro':
      return premierepro;
    case 'prisma':
      return prisma;
    case 'python':
      return python;
    case 'pytorch':
      return pytorch;
    case 'react':
      return react;
    case 'ruby':
      return ruby;
    case 'selenium':
      return selenium;
    case 'sketch':
      return sketch;
    case 'sklearn':
      return scikitlearn;
    case 'sqlalchemy':
      return sqlalchemy;
    case 'strapi':
      return strapi;
    case 'svelte':
      return svelte;
    case 'swift':
      return swift;
    case 'tailwind':
      return tailwind;
    case 'tensorflow':
      return tensorflow;
    case 'typescript':
      return typescript;
    case 'unity':
      return unity;
    case 'vitejs':
      return vitejs;
    case 'vue':
      return vue;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'webix':
      return webix;
    case 'wolframalpha':
      return wolframalpha;
    case 'wordpress':
      return wordpress;
    default:
      break;
  }
}
