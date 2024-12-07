document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu").innerHTML = `
        <nav>
            <ul class="side_menu">
                <li><b>Zachary Tan</b></li>
                <li><a href="index.html">HOME</a></li>
                <li><a href="about.html">ABOUT</a></li>
                <li><a class="writing">WRITING</a>
                    <ul class="dropdown">
                        <li><a href="short_stories.html">Short Stories</a></li>
                        <li><a href="poems.html">Poems</a></li>
                    </ul>
                </li>
                <li><a href="projects.html">PROJECTS</a></li>
                <li><a href="games.html">GAMES</a></li>
            </ul>
        </nav>
    `;

    const currentPage = window.location.pathname;
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        let currPage = currentPage.split("/").pop();
        if (link.getAttribute("href") === currPage) {
            console.log(currPage);
            link.classList.add('active');
        }

        if (currPage === "short_stories.html" || currPage === "poems.html") {
            const writingElement = document.querySelector('nav .writing');
            if (writingElement) {
                writingElement.classList.add('active');
            }
        }
    });
});