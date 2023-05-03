import styles from "./BarChartCountry.module.css";
import Link from "next/link";

export default function BarChartCountry({sorting, country, hoverBlock, setHoverBlock}) {
    const Base = sorting ? Link : "div";

    return (
        <figure className={styles.barChart}>
            <Bar name="healthy" color={(hoverBlock === "healthy" || hoverBlock === null) ? "#5A0C9C": "#C9C8CD"} value={country.healthy} height={28} href={{pathname: "/visualization3", query: {order: "healthy"}}} Base={Base} hoverBlock={hoverBlock}
                 setHoverBlock={setHoverBlock}/>
            <Bar name="freedom" color={(hoverBlock === "freedom" || hoverBlock === null) ? "#FFE000": "#C9C8CD"} value={country.freedom} height={15} href={{pathname: "/visualization3", query: {order: "freedom"}}} Base={Base} hoverBlock={hoverBlock}
                 setHoverBlock={setHoverBlock}/>
            <Bar name="gdp" color={(hoverBlock === "gdp" || hoverBlock === null) ? "#4AA221": "#C9C8CD"} value={country.gdp} height={12} href={{pathname: "/visualization3", query: {order: "gdp"}}} Base={Base} hoverBlock={hoverBlock}
                 setHoverBlock={setHoverBlock}/>
            <Bar name="generosity" color={(hoverBlock === "generosity" || hoverBlock === null) ? "#F47D21": "#C9C8CD"} value={country.generosity} height={10} href={{pathname: "/visualization3", query: {order: "generosity"}}} Base={Base} hoverBlock={hoverBlock}
                 setHoverBlock={setHoverBlock}/>
            <Bar name="corruption" color={(hoverBlock === "corruption" || hoverBlock === null) ? "#BD3000": "#C9C8CD"} value={country.corruption} height={9} href={{pathname: "/visualization3", query: {order: "corruption"}}} Base={Base} hoverBlock={hoverBlock}
                 setHoverBlock={setHoverBlock}/>
            <Bar name="social" color={(hoverBlock === "social" || hoverBlock === null) ? "#DBAB5E": "#C9C8CD"}  value={country.social} height={9} href={{pathname: "/visualization3", query: {order: "social"}}} Base={Base} hoverBlock={hoverBlock}
                 setHoverBlock={setHoverBlock}/>
        </figure>
    );
}

function Bar({height, value, color, href, Base, hoverBlock, setHoverBlock, name}) {
    return <Base
        href={href}
        style={{
            backgroundColor: color,
            height,
            width: value
        }}
        onMouseEnter={() => setHoverBlock(name)}
        onMouseLeave={() => setHoverBlock(null)}
    />
}
