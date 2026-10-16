document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu").innerHTML = `
        <nav>
            <ul class="side_menu">
                <li><b>Zachary Tan</b></li>
                <li><a href="index.html">ABOUT</a></li>
                <li><a href="projects.html">PROJECTS</a></li>
                <li><a href="games.html">GAMES</a></li>
                <li class="has-dropdown"><a class="writing" href="#" aria-expanded="false">WRITING</a>
                    <ul class="dropdown">
                        <li><a href="short_stories.html">Short Stories</a></li>
                        <li><a href="poems.html">Poems</a></li>
                    </ul>
                </li>
                <li><a href="music.html">MUSIC</a></li>
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

    const menuItem = document.querySelector("nav .has-dropdown");
    const toggleLink = menuItem.querySelector(".writing");

    function setOpen(open) {
        menuItem.classList.toggle("open", open);
        toggleLink.setAttribute("aria-expanded", open);
    }

    toggleLink.addEventListener("click", function (e) {
        e.preventDefault();   // stops href="#" from jumping to the top
        setOpen(!menuItem.classList.contains("open"));
    });

    // close when clicking anywhere else, or pressing Escape
    document.addEventListener("click", function (e) {
        if (!menuItem.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") setOpen(false);
    });
});