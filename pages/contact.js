import Layout from "../components/layout";
import styles from "../styles/contact.module.css"; 


export default function Contact() {
    return (
        <Layout>
            <div className={styles.contactcontainer} >
                <h1> So können Sie mit mir Kontakt aufnehmen! </h1>

                <span>email</span>
                <a href="mailto:pierredimo@live.com"> pierredimo@live.com </a>

                <div className={styles.spacing}></div>

                <span>Netzwerk</span>
                <div className={styles.contactLinks} >
                    <a href="https://www.linkedin.com/in/pierre-edimo-nkoe-442868140/" className={styles.linkedin} ><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/pierreEdimo" className={styles.github} ><i className="fab fa-github"></i></a>
                </div>

                <div className={styles.spacing}></div>

                <span>Nummer</span>
                <a href="tel:+491785171780">+49 178 5171780</a>
            </div>
        </Layout>
    )
}
