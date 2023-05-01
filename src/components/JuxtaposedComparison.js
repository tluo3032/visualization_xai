import BarChartCountry from "@/chartComponents/BarChartCountry";
import styles from './CountrySelectList.module.css';
import Image from "next/image";
import chart from "@/components/label.png";

export default function JuxtaposedComparison(props){
    function Bar({height, value, color}) {
        return <div
            style={{
                backgroundColor: color,
                width: value,
                height,
            }}
        />
    }
    function BarChartComparison({country1,country2}){
        return (
            <figure className={styles.barChart}>
                <div className={styles.group}>
                    <Bar name="healthy" color={"#5A0C9C"} value={country1.healthy} height={28}/>
                    <Bar name="healthy" color={"#5A0C9C"} value={country2.healthy} height={28}/>
                </div>
                <div className={styles.group}>
                    <Bar name="freedom" color={"#FFE000"} value={country1.freedom} height={15}/>
                    <Bar name="freedom" color={"#FFE000"} value={country2.freedom} height={15}/>
                </div>
                <div className={styles.group}>
                    <Bar name="gdp" color={"#4AA221"} value={country1.gdp} height={12}/>
                    <Bar name="gdp" color={"#4AA221"} value={country2.gdp} height={12}/>
                </div>
                <div className={styles.group}>
                    <Bar name="generosity" color={"#F47D21"} value={country1.generosity} height={10}/>
                    <Bar name="generosity" color={"#F47D21"} value={country2.generosity} height={10}/>

                </div>
                <div className={styles.group}>
                    <Bar name="corruption" color={"#BD3000"} value={country1.corruption} height={9}/>
                    <Bar name="corruption" color={"#BD3000"} value={country2.corruption} height={9}/>
                </div>
                <div className={styles.group}>
                    <Bar name="social" color={ "#DBAB5E"}  value={country1.social} height={9}/>
                    <Bar name="social" color={ "#DBAB5E"}  value={country2.social} height={9}/>
                </div>
            </figure>
        );
    }


    /*return(
        <div className={styles.comparisonContainer}>
        <div className={styles.comparisonCard}>
            <div>
                <BarChartComparison country1={props.country1} country2={props.country2}/>
            </div>
            <div>
                {props.country1.country}
                <BarChartCountry sorting={false}
                                 hoverBlock={null}
                                 setHoverBlock={() => {}}
                                 country={props.country1}/>
            </div>
            <div>
                {props.country2.country}
                <BarChartCountry sorting={false}
                                 hoverBlock={null}
                                 setHoverBlock={() => {}}
                                 country={props.country2}/>
            </div>

        </div>
            <div className={styles.annotation}>
                <Image src={chart}
                       width={250}/>
            </div>

        </div>)*/
    return(
        <div className={styles.comparisonContainer}>
            <div className={styles.comparisonCard}>
                <div>
                    <BarChartComparison country1={props.country1} country2={props.country2}/>
                </div>
                {props.country1.country} and {props.country2.country}
            </div>
            <div className={styles.annotation}>
                <Image src={chart}
                       width={250}/>
            </div>

        </div>
    )
}