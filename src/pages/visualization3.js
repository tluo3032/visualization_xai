import Head from "next/head";
import XAInavbar from "@/components/Navbar";
import styles from "@/pageStyles/visualization3.module.css";
import Sidebar from "@/components/Sidebar";
import WaffleChartSong1 from "@/chartComponents/WaffleChartSong1";
import WaffleChartSong2 from "@/chartComponents/WaffleChartSong2";
import WaffleChartSong3 from "@/chartComponents/WaffleChartSong3";
import WaffleChartSong4 from "@/chartComponents/WaffleChartSong4";
import WaffleChartSong5 from "@/chartComponents/WaffleChartSong5";
import WaffleChartSong6 from "@/chartComponents/WaffleChartSong6";
import WaffleChartSong7 from "@/chartComponents/WaffleChartSong7";
import WaffleChartSong8 from "@/chartComponents/WaffleChartSong8";
import WaffleChartSong9 from "@/chartComponents/WaffleChartSong9";
import WaffleChartSong10 from "@/chartComponents/WaffleChartSong10";
import Image from "next/image";
import chart from "@/components/label.png";

export default function visualization3() {
    return (
        <div>
            <Head>
                <title>XAI visualization</title>
            </Head>
            <div>
                <div>
                    <XAInavbar/>
                </div>
                <div className={styles.waffleContainer}>
                    <div className={styles.wafflebox}>
                        <div>
                            <div>1. Old Town Road - Remix</div>
                            <WaffleChartSong1/>
                        </div>
                        <div>
                            <div>2. bad guy</div>
                            <WaffleChartSong2/>
                        </div>
                        <div>
                            <div>3. Señorita</div>
                            <WaffleChartSong3/>
                        </div>
                        <div>
                            <div>4. 7 rings</div>
                            <WaffleChartSong4/>
                        </div>
                        <div>
                            <div>5. Sunflower</div>
                            <WaffleChartSong5/>
                        </div>
                        <div>
                            <div>6. Cruel Summer</div>
                            <WaffleChartSong6/>
                        </div>
                        <div>
                            <div>7. Without Me</div>
                            <WaffleChartSong7/>
                        </div>
                        <div>
                            <div>8. So Am I</div>
                            <WaffleChartSong8/>
                        </div>
                        <div>
                            <div>9. Shallow</div>
                            <WaffleChartSong9/>
                        </div>
                        <div>
                            <div>10. Lose You To Love Me</div>
                            <WaffleChartSong10/>
                        </div>

                    </div>
                    <div className={styles.label}>
                        <Image src={chart}
                               width={280}
                        alt=""/>
                    </div>

                </div>
                <footer className={styles.footer}>
                    <p>2023 XAI for Rank Visualization</p>
                </footer>
            </div>
        </div>
    )
}