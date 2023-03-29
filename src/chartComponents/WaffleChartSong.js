"use client"
import {useEffect, useRef} from "react";
import styles from "./WaffleChartSong.css";
import * as d3 from "d3";
import {useRouter} from "next/router";

export default function WaffleChartSong({sorting, song, hover}) {
    const router = useRouter();
    const ref = useRef();

    useEffect(() => {
        const waffle = d3.select(ref.current);
        const numbers = d3.range(60);
        const square = waffle
            .selectAll(".square")
            .data(numbers)
            .enter()
            .append("div")
            .attr("class", "square")
            .style("background-color", (d) => (
                d < song.speechness
                    ? "#0B041B"
                    : d < 20
                        ? "#C9C8CD"
                        : d < 20 + song.acoustiveness
                            ? "#9871B7"
                            : d < 40
                                ? "#E8E0EF"
                                : d < 40 + song.valence
                                    ? "#CDC2D6" : "#F4F2F6"))

        if (sorting) {
            square.on("click", (_, d) => {
                router.push({
                    pathname: "/visualization3",
                    query: {order: d < 20 ? "speechness" : d < 40 ? "acoustiveness" : "valence"}
                });
            });
        }
    }, [sorting, song]);

    return (
        <div className={styles.display}>
            <figure className="waffle" ref={ref}></figure>
        </div>
    );
}

