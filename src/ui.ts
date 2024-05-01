// Main UI/DOM Import/Export Functions

// Imports:
import { buildIndexPageUI } from "./index.ts";
import { buildBlogPageUI } from "./blog.ts";
import { buildContactPageUI } from "./contact.ts";
import { buildNowPageUI } from "./now";
import { buildPortfolioPageUI } from "./portfolio";

// Firebase Imports:

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


// Code/Functionality:

// Main Starting Point.  User or No User Conditional.
onAuthStateChanged(auth, (user) => {
    if (user) { console.log('User Detected.  Website Displaying With user Abilities.'); }
    if (!user) {
        buildUI();
    }
})

function buildUI() {
    buildSkeleton();
    buildNavUI();
    buildMainUI();
    buildFooterUI();
}

function buildSkeleton() { // Builds the basic skeleton for website.
    // root element is the main building scaffolding of the entire website.
    const root = document.getElementById('root') as HTMLDivElement;
    root.innerHTML = '';
    root.insertAdjacentHTML('afterbegin', `
        <div id='navContainer'></div>
        <div id='mainContentContainer'></div>
        <div id='footerContainer'></div>
    `)
}

function buildNavUI() {
    const navContainer = document.getElementById('navContainer') as HTMLDivElement;
    navContainer.innerHTML = '';
    navContainer.insertAdjacentHTML('afterbegin', `
        <nav>
            <a href='./index.html'>Home</a>
            <a href='./now.html'>Now</a>
            <a href='./portfolio.html'>Portfolio</a>
            <a href='./blog.html'>Blog</a>
            <a href='./contact.html'>Contact</a>
        </nav>
    `)
}

function buildMainUI() {
    const pathname: string = window.location.pathname; // Finding pathname to sort which UI page function to trigger.
    if (pathname == '/index.html' || pathname == '/' || pathname.length === 0) { buildIndexPageUI(); };
    if (pathname == '/now.html') { buildNowPageUI(); };
    if (pathname == '/portfolio.html') { buildPortfolioPageUI(); };
    if (pathname == '/blog.html') { buildBlogPageUI(); };
    if (pathname == '/contact.html') { buildContactPageUI(); };
}

function buildFooterUI() {
    const footerContainer = document.getElementById('footerContainer') as HTMLDivElement;
    footerContainer.innerHTML = '';
    footerContainer.insertAdjacentHTML('afterbegin', `
        <footer>
            <p>Website created by Daniel Godin</p>
            <p>Last Updated:  2024.05.01</p>
        </footer>
    `)
}