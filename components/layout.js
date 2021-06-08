import Head from "next/head";
import styles from "../styles/layout.module.css";
import AppHeader from "./appheader";
import AppFooter from "./appfooter"; 

export default function Layout({ title, children }) {
  return (
    <div className={styles.layoutContainer}>
      <Head>
        <title>{title}</title>
      </Head>
      <AppHeader />
      <div className="container" >{children}</div>
      <div>
        <AppFooter/>
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Patrice Edimo",
};
