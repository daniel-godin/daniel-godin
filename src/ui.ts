// Main UI/DOM Import/Export Functions

// Imports:

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
    const mainContentContainer = document.getElementById('mainContentContainer') as HTMLDivElement;
    mainContentContainer.innerHTML = '';
    mainContentContainer.insertAdjacentHTML('afterbegin', `
        <main>
            <h1>Welcome to Daniel Godin Website<h1>
            <p>More To Come Soon.  Check Back Often!</p>
        </main>
    `)
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