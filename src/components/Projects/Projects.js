import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import ProjectButton from '../../styles/GlobalComponents/ProjectButton';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />

            <HeaderThree title={p.title}>{p.title}</HeaderThree>
            <Hr />

            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Tech Stack</TitleContent>
              <Hr />
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              {p.source != null ? (
                <ExternalLinks href={p.source}>Source Code</ExternalLinks>
              ): null}
            </UtilityList>
            {p.downloadButtonLink ? (
              <>
              <UtilityList>
                <ProjectButton onClick={(e) => {
                  e.preventDefault();
                  // window.location.href = p.downloadButtonLink;
                  window.open(p.downloadButtonLink)
                }}> Paper </ProjectButton>
              </UtilityList>
              </>
            ): null}
            {p.company ? (
              <div style={{ marginBottom: 30 }}>
                <UtilityList>
                  <h5>{p.company}</h5>
                </UtilityList>
              </div>
            ): null}
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;