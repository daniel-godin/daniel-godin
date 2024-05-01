// Index Page for DanielGodin.org

// Imports:



// Functionality:

export function buildIndexPageUI() {
    const mainContentContainer = document.getElementById('mainContentContainer') as HTMLDivElement;
    mainContentContainer.innerHTML = '';
    mainContentContainer.insertAdjacentHTML('afterbegin', `
        <main id='mainIndexPageContainer'>
            <h1>Welcome to Daniel Godin Website<h1>
            <p>More To Come Soon.  Check Back Often!</p>
        </main>
    `)
}