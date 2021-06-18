import styles from "../styles/app_header.module.css";

import Link from "next/link";

export default function AppHeader() {
  return (
    <div className={styles.appHeader}>
      <div className="container">
        <div className={styles.headerContent}>
          <div>
            <Link href="/" >P.E</Link>
          </div>
          <div className={styles.menu} >
            <Link href="#home" >Home</Link>
            <Link  href="#projects">Projekte</Link>
            <Link  href="#about">Über mich</Link>
          </div>
          <div className="menu-icon">
            <Link href="https://www.linkedin.com/in/pierre-edimo-nkoe-442868140/" ><i className="fab fa-linkedin-in"/></Link>
            <Link href="https://github.com/pierreEdimo?tab=repositories" ><i className="fab fa-github"/></Link>
          </div>
        </div>
        <div className={styles.menuMobile} id="navbar" >
            <Link href="#home" >Home</Link>
            <Link  href="#projects">Projekt</Link>
            <Link  href="#about">Über mich</Link>
        </div>
      </div>
    </div>
  );
}



