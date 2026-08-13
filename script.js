
document.addEventListener("DOMContentLoaded", () => {

    // Welcome message
    setTimeout(() => {
        alert("👋 Welcome to JacchiKothay!\nDiscover the best places, events & offers near you.");
    }, 800);

    // Smooth scrolling
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            let href = this.getAttribute("href");

            if (href && href.startsWith("#")) {
                e.preventDefault();

                let section = document.querySelector(href);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Search
    const searchBtn = document.querySelector(".search-box button");
    const searchInput = document.querySelector(".search-box input");

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", () => {

            let text = searchInput.value.trim();

            if (text === "") {
                alert("Please type something to search.");
            } else {
                alert("Searching for: " + text);
            }

        });
    }

    // Cards hover
    const cards = document.querySelectorAll(".card,.place,.offer");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px) scale(1.02)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
        });

        card.addEventListener("click", () => {

            const title = card.querySelector("h3");

            if (title) {
                alert("Opening " + title.innerText + "...");
            }

        });

    });

    // Scroll animation
    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    });

    document.querySelectorAll(".section,.offers,.categories").forEach(sec => {
        observer.observe(sec);
    });

    // Back to top button
    const topBtn = document.createElement("button");

    topBtn.innerHTML = "⬆";
    topBtn.id = "topBtn";

    document.body.appendChild(topBtn);

    Object.assign(topBtn.style, {
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        border: "none",
        background: "#ff6b00",
        color: "white",
        fontSize: "24px",
        cursor: "pointer",
        display: "none",
        boxShadow: "0 8px 20px rgba(0,0,0,.25)",
        zIndex: "999"
    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // Footer
    const footer = document.querySelector("footer p:last-child");

    if (footer) {
        footer.innerHTML = "© " + new Date().getFullYear() + " JacchiKothay. All Rights Reserved.";
    }

});