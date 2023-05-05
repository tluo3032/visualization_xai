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
            <div className={styles.container}>
                <XAInavbar/>
                <div className={styles.leftSide}>
                    <p className={styles.task}>Your task<br/>here is the detailed description of the task that user should finish in this visualization</p>
                    {hover
                        ? <p className={styles.instruction}>Try to hover a bar</p>
                        : (sorting && !router.query.order)
                            ? <p className={styles.instruction}>Please click on a bar to sort</p>
                            : (sorting && router.query.order)
                                ? <p className={styles.instruction}>This is the result sorted by {router.query.order} (From high to low)</p>
                                : null}
                    <Image src={chart}
                           className={styles.label}
                           alt={"label"}/>
                    {router.query.order ?
                        <Link href={{query: null}} className={styles.backButton}>Back</Link> : null}
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
                </div>
            </div>
        </div>
    );
}