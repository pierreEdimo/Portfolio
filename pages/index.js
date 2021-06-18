import Layout from "../components/layout";
import Link from "next/link";
import ProjectItem from "../components/projectItem";
import styles from "../styles/home.module.css";

export default function Home({ projects }) {
  return (
    <Layout>
      <section className={styles.bannerContainer} id="home">
        <div className={styles.content}>
          <h1 className={styles.name}>Pierre Patrice Edimo</h1>
          <h2 className={styles.begruessung}>
            Ich entwickle Web-und Mobile(multi-platform) Anwendungen
          </h2>
        </div>
      </section>
      <section className={styles.projectContainer}  id="projects" >
        <hr />
        <h1 className={styles.title}>Projekts</h1>

        <div className={styles.gridContainer}>
          {projects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>

        <div className={styles.more}>
          <Link href="/project">Mehr</Link>
        </div>
      </section>

      <section className={styles.aboutContainer} id="about" >
        <hr />
        <h1 className={styles.title}>Über mich</h1>
        <div className={styles.flexContainer}>
          <div className={styles.imageContainer}>
            <img
              src="https://res.cloudinary.com/duouo355d/image/upload/v1624021556/pierre_rfwfgv.png"
              alt="my-picture"
            />
          </div>
          <div className={styles.spacing}></div>
          <div className={styles.textContainer}>
            <p>
              Programmieren ist meine Leidenschaft. Ich bin ein Full Stack
              entwicker. Ich entwickle sowohl Web-und Mobile Anwendungen für
              Endkunden. Ich stecke viel Mühe in alle meine Projekte, um
              hochqualitative und einzigartige Anwendungen zu entwickeln.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://portfiliobackend.herokuapp.com/projects?_limit=4"
  );
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
