// Now Page for DanielGodin.org

// Imports:



// Functionality:

export function buildNowPageUI(mainContentContainer:HTMLDivElement) {
    mainContentContainer.innerHTML = '';
    mainContentContainer.insertAdjacentHTML('afterbegin', `
        <main id='mainNowPageContainer'>
            <h2>What I'm Doing Now:</h2>
            <p>Last Updated:  2024.03.07 - March 7th, 2024</p>
            <ul id='nowPageList'>
                <li class="now-list-item">
                    Applying for Web Development positions.  If you have a position open for a junior web developer, please contact me.  Email or Text would be best.
                </li>
                <li class="now-list-item">
                    Working on various personal web projects:
                </li>
                <li class="now-list-item">
                    DanielGodin.org <-- My personal webpage which will contain my portfolio, what I'm up to, and various tools I'm building and have built.
                </li>
                <li class="now-list-item">
                    Playing tennis again and loving it!  Hoping to join a casual league this year (2024).

                </li>
                <li class='now-list-item'>
                    Living and loving life in the Bay Area, CA.
                </li>
            </ul>

            <p>This page is updated regularly and is intended to let you know the main things I'm up to right now.  I got inspiration for this page from Derek Sivers and his <a href='https://www.nownownow.org'>NOW NOW NOW</a> movement.</p>
            
        </main>
    `)
}