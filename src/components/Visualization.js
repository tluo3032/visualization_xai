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
                    {hover
                        ? <p className={styles.task}>
                            Answer the questions:<br/>
                            Which country has the highest social support?
                            <br/>Which country has the lowest freedom?
                        </p>
                        : (sorting && !router.query.order)
                            ? <p className={styles.task}>
                                Please answer the questions:<br/>
                                Which country has the highest corruption?
                                Which country has the lowest healthy life expectancy?
                            </p>
                            : (sorting && router.query.order)
                                ?<div><p className={styles.task}>
                                    Please answer the questions:<br/>
                                    Which country has the highest corruption?
                                    Which country has the lowest healthy life expectancy?
                                </p>
                                    <p className={styles.instruction}>This is the result sorted by {router.query.order} (From high to low)</p></div>
                                : <p className={styles.task}>Please answer the questions:<br/>
                                    Which country has the highest GDP per capita? Which country has the lowest generosity?</p>}
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
                                <div className={styles.countryName}>{country.country}</div>
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