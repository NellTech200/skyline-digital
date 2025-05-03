"use client";

import React, { useEffect, useState } from "react";
import './header.css';
import AppBtn from "./AppBtn";
import Nav from "./Nav";

export default function Header() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        // Set the initial scroll position
        setScroll(window.scrollY);

        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // No dependency array needed

    return (
        <header
            id="header"
            className={`fixed-top d-flex align-items-cente ${scroll > 100 ? "header-scrolled" : ""}`}
        >
            <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
                <h1 className="logo me-auto me-lg-0">
                    <a href="/">Skyline-Digital</a>
                </h1>

                <Nav />

                <AppBtn name="Book a meeting"/>
            </div>
        </header>
    );
}
