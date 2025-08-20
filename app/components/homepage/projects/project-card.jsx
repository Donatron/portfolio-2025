// @flow strict

import * as React from 'react';

import ProjectCode from './project-code';
import ProjectDescription from './project-description';
import ProjectRole from './project-role';
import ProjectTools from './project-tools';

function ProjectCard({ project }) {
  return (
    <ProjectCode projectName={project.name}>
      <ProjectTools projectTools={project.tools} />
      <ProjectRole role={project.role} />
      <ProjectDescription description={project.description} />
    </ProjectCode>
  )
};

export default ProjectCard;