'use client';
import { Navbar, Dropdown, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import React from "react";


const XAInavbar=()=>{

    return(
        <Navbar isBordered variant='sticky'
                isCompact="true"
                css={{$$navbarBackgroundColor: "#F4F7FF",
                    $$navbarBlurBackgroundColor: "#F4F7FF"}}>
            <Navbar.Content css={{backgroundColor:'#F4F7FF'}}>
                <Dropdown>
                    <Navbar.Item>
                        <Dropdown.Button
                            auto
                            light
                            css={{
                                px: 0,
                                dflex: "center",
                                svg: { pe: "none" },
                            }}
                            ripple={false}
                        >
                            Visualization Selection
                        </Dropdown.Button>
                    </Navbar.Item>
                    <Dropdown.Menu
                        aria-label="Visualization Selection"
                        css={{
                            $$dropdownMenuWidth: "250px",
                            $$dropdownItemHeight: "20px",
                            backgroundColor:"#F4F7FF",
                            "& .nextui-dropdown-item": {
                                py: "$4",
                                // dropdown item left icon
                                svg: {
                                    color: "$secondary",
                                    mr: "$4",
                                },
                                // dropdown item title
                                "& .nextui-dropdown-item-content": {
                                    w: "100%",
                                    fontWeight: "$semibold",
                                },
                            },
                        }}
                    >
                        <Dropdown.Item key="Visualization 1">
                            Visualization 1
                        </Dropdown.Item>
                        <Dropdown.Item key="Visualization 2">
                            Visualization 2
                        </Dropdown.Item>
                        <Dropdown.Item key="Visualization 3">
                            Visualization 3
                        </Dropdown.Item>
                        <Dropdown.Item key="Visualization 4">
                            Visualization 4
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Content>
            <Navbar.Content>
                Visualization 1
            </Navbar.Content>
        </Navbar>
    )
}

export default XAInavbar;