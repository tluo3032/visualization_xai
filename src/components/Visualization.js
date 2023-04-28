import Head from "next/head";
import XAInavbar from "@/components/Navbar";
import styles from "@/components/visualization.module.css";
import {countries} from "@/CountryData";
import BarChartCountry from "@/chartComponents/BarChartCountry";
import Image from "next/image";
import chart from "@/components/label.png";
import {useRouter} from "next/router";
import Link from "next/link";
import {useState} from "react";

export default function Visualization({sorting, hover}) {
    const router = useRouter();
    const [hoverBlock, setHoverBlock] = useState(null);
    let sortedCountries = countries;
    if (['healthy', 'freedom', 'gdp', 'generosity', 'corruption', 'social'].includes(router.query.order)) {
        sortedCountries = [...sortedCountries].sort((a, b) =>
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
                    {hover
                        ? <h1 className={styles.title}>Try move the mouse to different bar</h1>
                        : (sorting && !router.query.order)
                            ? <h1 className={styles.title}>Please click on a bar to sort</h1>
                            : (sorting && router.query.order)
                                ? <h1 className={styles.title}>This is the result sorted by {router.query.order}</h1>
                                : null}
                </div>
                <div className={styles.waffleContainer}>
                    <div className={styles.wafflebox}>
                        {sortedCountries.map(country => (
                            <div key={country.country}>
                                <div>{country.country}</div>
                                <BarChartCountry sorting={sorting} country={country} hoverBlock={hoverBlock}
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