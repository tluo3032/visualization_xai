import Head from "next/head";
import XAInavbar from "@/components/Navbar";
import styles from "@/components/visualization.module.css";
import {songs} from "@/SongData";
import WaffleChartSong from "@/chartComponents/WaffleChartSong";
import Image from "next/image";
import chart from "@/components/label.png";
import {useRouter} from "next/router";
import Link from "next/link";
import {useState} from "react";

export default function Visualization({sorting, hover}) {
    const router = useRouter();
    const [hoverBlock, setHoverBlock] = useState(null);
    let sortedSongs = songs;
    if (['acoustiveness', 'valence', 'speechness'].includes(router.query.order)) {
        sortedSongs = [...sortedSongs].sort((a, b) =>
            b[router.query.order] - a[router.query.order]
        );
    }
    return (
        <div>
            <Head>
                <title>XAI visualization</title>
            </Head>
            <div>
                <div>
                    <XAInavbar/>
                </div>
                <div>
                    {hover ? <h1 className={styles.title}>Try hover on different block</h1> : sorting ?  <h1 className={styles.title}>Please click on block to sort</h1> : null}
                </div>
                <div className={styles.waffleContainer}>
                    <div className={styles.wafflebox}>
                        {sortedSongs.map(song => (
                            <div key={song.name}>
                                <div>{song.name}</div>
                                <WaffleChartSong sorting={sorting} song={song} hoverBlock={hoverBlock}
                                                 setHoverBlock={hover ? setHoverBlock : () => {}}/>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Image src={chart}
                               width={380}/>
                        {router.query.order ?
                            <Link href={{query: null}} className={styles.backButton}>Back</Link> : null}
                    </div>

                </div>
                <footer className={styles.footer}>
                    <p>2023 XAI for Rank Visualization</p>
                </footer>
            </div>
        </div>
    );
}