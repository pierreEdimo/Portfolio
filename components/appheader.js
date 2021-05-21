import styles from "../styles/appheader.module.css";
import Link from "next/link";

export default function AppHeader() {
  return (
    <div className={styles.appheader}>
      <div className={styles.logo}>
        <Link href="/">Patrice Edimo</Link>
      </div>
      <div className={styles.navmenu}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projektes</Link>
        <Link href="/contact">Kontakt</Link>
      </div>
    </div>
  );
}
