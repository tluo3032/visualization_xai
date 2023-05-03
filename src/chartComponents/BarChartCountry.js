import styles from "./BarChartCountry.module.css";
import Link from "next/link";

export default function BarChartCountry({sorting, country, hoverBlock, setHoverBlock}) {
    const Base = sorting ? Link : "div";

    return (
        <figure className={styles.barChart}>
            <Bar name="healthy" color="#5A0C9C" value={country.healthy} height={28} href={{pathname: "/visualization3", query: {order: "healthy"}}} Base={Base} hoverBlock={hoverBlock}
                 setHoverBlock={setHoverBlock}/>
            <Bar name="freedom" color="#FFE000" value={country.freedom} height={15} href={{pathname: "/visualization3", query: {order: "freedom"}}} Base={Base} hoverBlock={hoverBlock}
                 setHoverBlock={setHoverBlock}/>
            <Bar name="gdp" color="#4AA221" value={country.gdp} height={12} href={{pathname: "/visualization3", query: {order: "gdp"}}} Base={Base} hoverBlock={hoverBlock}
                 setHoverBlock={setHoverBlock}/>
            <Bar name="generosity" color="#F47D21" value={country.generosity} height={10} href={{pathname: "/visualization3", query: {order: "generosity"}}} Base={Base} hoverBlock={hoverBlock}
                 setHoverBlock={setHoverBlock}/>
            <Bar name="corruption" color="#BD3000" value={country.corruption} height={9} href={{pathname: "/visualization3", query: {order: "corruption"}}} Base={Base} hoverBlock={hoverBlock}
                 setHoverBlock={setHoverBlock}/>
            <Bar name="social" color="#DBAB5E" value={country.social} height={9} href={{pathname: "/visualization3", query: {order: "social"}}} Base={Base} hoverBlock={hoverBlock}
                 setHoverBlock={setHoverBlock}/>
        </figure>
    );
}

function Bar({height, value, color, href, Base, hoverBlock, setHoverBlock, name}) {
    return (<div className={styles.display}>
        <Base
            href={href}
            style={{
                backgroundColor: (hoverBlock === name || hoverBlock === null)
                                    ? color: "#C9C8CD",
                height,
                width: value
            }}
            onMouseEnter={() => setHoverBlock(name)}
            onMouseLeave={() => setHoverBlock(null)}>
        </Base>
        {(hoverBlock === name)
            ? <p className={styles.data}>{value}</p>
            : null}
    </div>)

}
