import Link from "next/link";
import Image from "next/image"; 

export default function ProjectItem({ project }) {
  return (
    <Link href={project.Url}>
      <div className="card">
        <div className="card-header">
          <i className="fab fa-github" />
        </div>
        <div className="card-body">
          <Image src={project.Image.formats.thumbnail.url} height="156" width="82" />
        </div>
        <div className="card-footer">
          <h1>{project.Name}</h1>
          <h2>{project.Stacks}</h2>
        </div>
      </div>
    </Link>
  );
}
