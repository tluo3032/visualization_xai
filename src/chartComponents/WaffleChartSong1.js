"use client"
import {useEffect} from "react";
import "./WaffleChartSong1.css";
import * as d3 from "d3";

export default function WaffleChartSong1() {
        useEffect(() => {
            // Select your div
            const unsubscribe = () => {
                const waffle = d3.select(".waffle1");

                // Create an array with numbers 0 - 60
                const numbers = d3.range(60);

                // For each item in the array, add a div element

                waffle
                    .selectAll(".square1")
                    .data(numbers)
                    .enter()
                    .append("div")
                    .attr("class", "square1")
                    .style("background-color", (d) => (d < 4 ? "#0B041B" : d < 20 ? "#C9C8CD": d < 22 ? "#9871B7" : d < 40 ? "#E8E0EF" : d < 58 ? "#CDC2D6" : "#F4F2F6"));
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
                <figure className="waffle1"></figure>
            </div>
        );
}