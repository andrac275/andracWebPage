import React from "react";
import ProjectCard from "../../../components/web/ProjectCard/ProjectCard";
import "./Projects.css";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "path/to/image1.jpg",
    link: "#",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image: "path/to/image2.jpg",
    link: "#",
  },
  // More projects
];

export default function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
