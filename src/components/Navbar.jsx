import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <header class="navbar" role="banner">
                <div class="navbar__container">
                    <a href="#" class="navbar__brand">BrandName</a>
                    {/*
                        This button controls the mobile navigation menu.
                        - `aria-label` describes the button to screen readers.
                        - `aria-controls` points to the ID of the menu it controls.
                        - `aria-expanded` tells screen readers if the menu is open or closed.
                    */}
                    
                    {/* Toggle button (mobile) */}
                    <button className={`navbar__toggle ${isOpen ? "is-active" : ""}`} onClick={() => setIsOpen(!isOpen)}    >
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                    
                    {/* Navigation Menu */}
                    <nav id="navbarMenu"  className={`navbar__menu ${isOpen ? "is-active" : ""}`}>
                        <ul class="navbar__list">
                            <li class="navbar__item"><a href="#" class="navbar__link">Home</a></li>
                            <li class="navbar__item"><a href="#" class="navbar__link">Activity</a></li>
                            <li class="navbar__item navbar__item--cta">
                                <a href="#" class="navbar__link navbar__link--cta">Sign Up</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}