export default function ProjectCard({ project }) {
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
