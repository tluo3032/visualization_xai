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
                <XAInavbar/>
                <div className={styles.body}>
                        <CountrySelectList/>
                </div>
            </div>
        </div>
    );
}
