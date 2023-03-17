"use client"
import {useEffect} from "react";
import "./WaffleChartSong5.css";
import * as d3 from "d3";

export default function WaffleChartSong5() {
    useEffect(() => {
        // Select your div
        const unsubscribe = () => {
            const waffle = d3.select(".waffle5");

            // Create an array with numbers 0 - 60
            const numbers = d3.range(60);

            // For each item in the array, add a div element

            waffle
                .selectAll(".square5")
                .data(numbers)
                .enter()
                .append("div")
                .attr("class", "square5")
                .style("background-color", (d) => (d < 2 ? "#0B041B" : d < 20 ? "#C9C8CD": d < 38 ? "#9871B7" : d < 40 ? "#E8E0EF" : "#CDC2D6"));
        };

        return unsubscribe();
    }, []);

    return (
        <div
            style={{
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin:"0",
                padding:"0",
                height: "100%",
                width: "150px"
            }}
        >
            <figure className="waffle5"></figure>
        </div>
    );
}