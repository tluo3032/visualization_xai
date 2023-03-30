import styles from "./WaffleChartSong.css";
import Link from "next/link";
import {useState} from "react";

export default function WaffleChartSong({sorting, song, hoverBlock, setHoverBlock}) {
    const Square = sorting ? Link : "div";

    return (
        <div className={styles.display}>
            <figure className="waffle">
                {Array.from({length: 60}).map((_, d) =>
                    <Square
                        key={d}
                        href={{
                            pathname: "/visualization3",
                            query: {order: d < 20 ? "speechness" : d < 40 ? "acoustiveness" : "valence"}
                        }}
                        className="square"
                        style={{backgroundColor:
                                hoverBlock === null || (d >= hoverBlock - hoverBlock % 20 && d < hoverBlock - hoverBlock % 20 + 20) ?
                                    d < song.speechness
                                    ? "#0B041B"
                                    : d < 20
                                        ? "#C9C8CD"
                                        : d < 20 + song.acoustiveness
                                            ? "#9871B7"
                                            : d < 40
                                                ? "#E8E0EF"
                                                : d < 40 + song.valence
                                                    ? "#CDC2D6" : "#F4F2F6"
                               : "#F4F2F6"
                        }}
                        onMouseEnter={() => setHoverBlock(d)}
                        onMouseLeave={() => setHoverBlock(null)}
                    />
                )}
            </figure>
        </div>
    );
}

