import { Inter } from 'next/font/google'
import styles from "@/pages/index.module.css";
import {songs} from "@/SongData";
import React from "react";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className={styles.background}>
        <h1 className={styles.h1title}>Top 10 Hits of 2019</h1>
        <ol className={styles.list}>
          {songs.map((val, key) => {
            // Need to finish onClick function
            return <li key={key} className={styles.container}>
                <img src={val.image} className={styles.picture} alt="image"></img>
                <div className={styles.vertical}>
                    <div className={styles.title}>{val.name.substring(3)}</div>
                    <div className={styles.infoSinger}>{val.artist}</div>
                    <div className={styles.infoOther}>{val.genre}</div>
                    <div className={styles.infoOther}>{val.length}</div>
                </div>
            </li>;
          })}
            <Link href={"/visualization1"} className={styles.nextButton}>Let's Explore!</Link>
        </ol>
      </div>
  );
}
