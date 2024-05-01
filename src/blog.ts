// Blog Page for DanielGodin.org

// Imports:



// Functionality:

export function buildBlogPageUI(mainContentContainer:HTMLDivElement) {
    mainContentContainer.innerHTML = '';
    mainContentContainer.insertAdjacentHTML('afterbegin', `
        <main id=''>

        </main>
    `)
}