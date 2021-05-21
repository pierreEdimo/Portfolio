import Layout from "../components/layout";
import styles from "../styles/project.module.css";
import ProjectItem from "../components/projectItem";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className={styles.projectcontainer}>
        <h1>
          Werfen Sie einen Blick auf die Projekte, an denen ich gearbeitet habe!
        </h1>
        <div className={styles.spacing} ></div>
        <div className={styles.gridcontainer}>
        
            {projects.map((project) => (
              <ProjectItem key={project._id} project={project} />
            ))}
        
        </div>
        <div className={styles.mobilespace} ></div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://portfiliobackend.herokuapp.com/projects");
  const projects = await res.json();

  return {
    props: {
      projects,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}
