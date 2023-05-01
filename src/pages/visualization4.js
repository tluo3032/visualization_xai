import Head from "next/head";
import XAInavbar from "@/components/Navbar";
import styles from "@/components/visualization.module.css";
import CountrySelectList from "@/components/CountrySelectList";


export default function Visualization4(){

    return (
        <div>
            <Head>
                <title>XAI visualization</title>
            </Head>
            <div>
                <div className={styles.body}>
                        <XAInavbar/>
                        <CountrySelectList/>
                </div>
                <footer className={styles.footer}>
                    <p>2023 XAI for Rank Visualization</p>
                </footer>
            </div>
        </div>
    );
}
