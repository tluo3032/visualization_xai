"use client"
import {useEffect} from "react";
import "./WaffleChartSong10.css";
import * as d3 from "d3";

export default function WaffleChartSong10() {
    useEffect(() => {
        // Select your div
        const unsubscribe = () => {
            const waffle = d3.select(".waffle10");

            // Create an array with numbers 0 - 60
            const numbers = d3.range(60);

            // For each item in the array, add a div element

            waffle
                .selectAll(".square10")
                .data(numbers)
                .enter()
                .append("div")
                .attr("class", "square10")
                .style("background-color", (d) => (d < 1 ? "#0B041B" : d < 20 ? "#C9C8CD": d < 39 ? "#9871B7" : d < 40 ? "#E8E0EF" : d < 41 ?  "#CDC2D6" : "#E8E0EF"));
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
            <figure className="waffle10"></figure>
        </div>
    );
}