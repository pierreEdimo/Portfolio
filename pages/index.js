import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ProjectItem from "../components/projectItem";

export default function Home({ projects }) {
  return (
    <Layout>
      <div className={styles.homecontainer}>
        <div className={styles.banner}>
          <h2 className={styles.name}>Patrice Edimo</h2>
          <h1>Fullstack Entwickler</h1>
          <h1>Ich entwickle Web-und Mobile Anwendungen</h1>
        </div>
      </div>

      <div className={styles.infocontainer}>
        <div className={styles.content}>
          <div className={styles.coleins}>
            <img
              src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/90518767_1310718185782966_571065865357754368_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=IOvjCKUsW1wAX-afvli&_nc_oc=AQkOfTFafyDLV4_m-w6JmzZwBfRVfF5umdlzKf10ql1KcTJkYYo4q4CNsLHnVlXzfus&_nc_ht=scontent-frt3-1.xx&oh=66354d56c54089f09f73753bb6c0dc11&oe=60C4D1F6"
              alt="me"
            />
          </div>
          <div className={styles.space}></div>
          <div className={styles.colzwei}>
            <p>
              Programmieren ist meine Leidenschaft. Ich bin ein Full Stack
              entwicker. Ich entwickle sowohl Web-und Mobile Anwendungen für
              Endkunden. Ich stecke viel Mühe in alle meine Projekte, um
              hochqualitative und einzigartige Anwendungen zu entwickeln.
            </p>
            <div className= {styles.space} ></div>
            <div>
              <Link href="/contact"> Kontakt </Link>
              <Link href="https://github.com/pierreEdimo">Github </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mobilespace}></div>

      <div className={styles.flexContainer}>
        <div className={styles.homeGricontainer}>
          {projects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>

        <div className={styles.space} ></div>

        <div className={styles.buttonContainer}>
          <Link href="/projects"> Mehr Projekte </Link>
         </div>
        
      </div>

      <div className={styles.mobilespace}></div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://portfiliobackend.herokuapp.com/projects?_limit=2");
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
