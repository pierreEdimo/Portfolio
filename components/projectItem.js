import styles from "../styles/project.module.css";
import Link from "next/link";

export default function ProjectItem({ project }) {
  return (
    <div className={styles.projectItem}>
      <Link href={project.Url} >
        <div className={styles.imgcontainer}>
          <img src={project.Image.url} />
        </div>
      </Link>
      <h1>{project.Name}</h1>
      <h2>stack : {project.Stacks}</h2>
    </div>
  );
}
