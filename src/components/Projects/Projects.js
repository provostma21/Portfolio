// import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectList";

// function Project({ projects }) {
//   return (
//     <>
//       <th>{projects}</th>
//     </>
//   );
// }

// export default function ProjectGrid({ projects }) {
//   const cards = [];
//   let lastProject = null;

//   projects.forEach((project) => {
//     if (project.id !== lastProject) {
//       cards.push(<Project id={project.id} key={project.id} />);
//     }
//     cards.push(<ProjectCard project={project} key={project.id} />);
//     lastProject = project.id;
//   });

//   return <grid>{cards}</grid>;
// }

function Project(props) {
  const arrayDataItems = projectData.map((projectData) => (
    <li className="project-list-item" key={projectData.id}>
      {`${projectData.name}`}{" "}
      {
        <img
          key={projectData.id}
          src={projectData.image}
          alt={projectData.name}
        />
      }{" "}
      <a href={projectData.link}>DEMO</a>{" "}
      <a href={projectData.repoLink}>REPO</a>
    </li>
  ));
  return (
    <div className="container">
      <div>
        <h1>Render Project List Items</h1>
      </div>
      <ul>{arrayDataItems}</ul>
    </div>
  );
}

export default Project;
