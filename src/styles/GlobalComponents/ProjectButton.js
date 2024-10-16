import React from 'react'

import { ProjectButtonBack, ProjectButtonFront } from './index'

const ProjectButton = (props) => (
  <ProjectButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <ProjectButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ProjectButtonFront>
  </ProjectButtonBack>
);

export default ProjectButton