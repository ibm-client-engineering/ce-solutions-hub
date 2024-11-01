'use client';
import React from 'react';
import { Launch, ToolKit } from '@carbon/icons-react';
import {
  ClickableTile,
  Tag,
  Row,
} from "@carbon/react";

const ProjectsTiles = ({ data }) => {
  return (
    <div className="projectTileContainer">
      {data.map((repo, index) => (
        <ClickableTile id={repo.name} className="projectTile" key={index} href={repo.homepageUrl} target="_blank" rel="noopener noreferrer" renderIcon={Launch}>
          <h6 className="projectTile__title">{repo.title}</h6>
          <p3 className="projectTile__industry">{repo.industry}</p3>
          <p3 className="projectTile__description">{repo.description}</p3>
          <Row className="project__row">
          <ToolKit className="toolkit_icon"/>
          { Object.hasOwn(repo, "technology") ? 
          repo.technology.map((tech, index) => (
            <Tag className="projectTile__techs" type="blue" key={index}>
              {tech}
            </Tag>
          )) : <></>}
          </Row>
        </ClickableTile>
      ))}
    </div>
  );
};

export default ProjectsTiles;

 
