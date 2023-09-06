import ProjectForm from "./ProjectForm";
import { PROJECTS } from "./ProjectList";

function Project({ projects }) {
  return (
    <>
      <th>{projects}</th>
    </>
  );
}

function ProjectCard({ project }) {
  return (
    <>
      <div>
        <div>{project.name}</div>
        <div>{project.link}</div>
        <div>{project.repoLink}</div>
        <div>{project.image}</div>
      </div>
    </>
  );
}

export default function ProjectGrid({ projects }) {
  const cards = [];
  let lastProject = null;

  projects.forEach((project) => {
    if (project.id !== lastProject) {
      cards.push(<Project id={project.id} key={project.id} />);
    }
    cards.push(<ProjectCard project={project} key={project.id} />);
    lastProject = project.id;
  });

  return <grid>{cards}</grid>;
}
