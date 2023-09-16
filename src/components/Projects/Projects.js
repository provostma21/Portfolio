// import ProjectCard from "./ProjectCard";
import "../Style/Projects.css";
import { projectData } from "./ProjectList";

// const styles = {
//   image: {
//     height: "200px",
//     length: "200px",
//   },
// };
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
          className="image"
          key={projectData.id}
          src={projectData.image}
          alt={projectData.name}
        />
      }{" "}
      <button>
        <a href={projectData.link}>DEMO</a>
      </button>{" "}
      <button>
        <a href={projectData.repoLink}>REPO</a>
      </button>
    </li>
  ));
  return (
    <div className="container">
      <div>
        <h1>My Work</h1>
      </div>
      <ul>{arrayDataItems}</ul>
    </div>
  );
}

export default Project;
