import React from "react";
import Header from "../Header";

import "./index.css";

const Projects = () => {
  const projects = [
    {
      title: "Tourism",
      description:
        "Description of Project 1. Showing Different Tourist places in India.",
      link: "https://srikanthtour02.ccbp.tech", // Add a link to the project or GitHub repository
    },
    {
      title: "Todo Application",
      description: "Description of Project 2. Remainder the users.",
      link: "https://srikanthtodo2.ccbp.tech",
    },
    {
      title: "Chat Boot",
      description: "Description of Project 2. Chatbot likes an AI.",
      link: "textboot.ccbp.tech",
    },
    {
      title: "Select A Pet",
      description: "Description of Project 2. Choose a Pet to display.",
      link: "selectpet02.ccbp.tech",
    },
    {
      title: "Projects List",
      description:
        "Description of Project 2. In this we can see types of application we did it until now.",
      link: "https://final07.ccbp.tech",
    },
    // Add more projects as needed
  ];

  return (
    <>
      <Header />
      <section id="projects" className="projects">
        <h1>Projects</h1>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
