import Head from "next/head";
import XAInavbar from "@/components/Navbar";
import styles from "@/components/visualization.module.css";
import CountrySelectList from "@/components/CountrySelectList";
import Image from "next/image";
import chart from "@/components/label.png";
import Link from "next/link";


export default function Visualization4(){

    return (
        <div>
            <Head>
                <title>XAI visualization</title>
            </Head>
            <div className={styles.leftSide}>
                <XAInavbar />
                <p className={styles.task}>Your task: blabla</p>
            </div>
            <div className={styles.body}>
                    <CountrySelectList/>
            </div>
            <footer className={styles.footer}>
                <p>2023 XAI for Rank Visualization</p>
            </footer>
        </div>
    );
}
