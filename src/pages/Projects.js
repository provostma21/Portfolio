import projects from "../assets/projects/ProjectList";

export default function Project() {
  const listItems = projects.map((project) => (
    <li key={project.id}>{project.name}</li>
  ));

  return <ul>{listItems}</ul>;
}
