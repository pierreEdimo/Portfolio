import Layout from "../components/layout";
import Link from "next/link"; 
import styles from "../styles/404.module.css"; 

export default function NotFoundPage() {
    return (
        <Layout title="Seite nich gefunden">
            <div className={styles.error} >
                <h1>404</h1>
                <h4> Sorry, Seite existiert nicht</h4>
                <Link href="/" >Home</Link>
            </div>
        </Layout>
    )
}
