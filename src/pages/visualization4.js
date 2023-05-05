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
            <div>
                <XAInavbar />
                <div className={styles.leftSide}>
                    <p className={styles.task}>Your task<br></br>blabla</p>
                </div>
                <div className={styles.body}>
                        <CountrySelectList/>
                </div>
            </div>
        </div>
    );
}
