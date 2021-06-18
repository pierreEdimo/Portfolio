import styles from "../styles/app_footer.module.css"
import Link from 'next/link'

export default function AppFooter() {
  return (
    <footer className={styles.footerApp} id="contact">
      <div>
        <p>
          <span>Nummer : </span> +49 1798 517 17 80{" "}
        </p>
        <p>
          <span>Email : </span> pierredimo@live.com
        </p>
      </div>
      <div className={styles.footerIcon}>
        <Link href="https://www.linkedin.com/in/pierre-edimo-nkoe-442868140/">
          <i className="fab fa-linkedin-in" />
        </Link>
        <Link href="https://github.com/pierreEdimo?tab=repositories">
          <i className="fab fa-github" />
        </Link>
      </div>
    </footer>
  );
}
