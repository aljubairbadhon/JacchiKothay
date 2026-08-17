document.addEventListener("DOMContentLoaded", () => {

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


    const footer = document.querySelector("footer p:last-child");

    if (footer) {
        footer.innerHTML = "© " + new Date().getFullYear() + " JacchiKothay. All Rights Reserved.";
    }

});
const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("registerName").value.trim();

        const email = document.getElementById("registerEmail").value.trim();

        const password = document.getElementById("registerPassword").value;

        const confirmPassword = document.getElementById("confirmPassword").value;

        const message = document.getElementById("registerMessage");


        if (password !== confirmPassword) {

            message.textContent = "Passwords do not match.";

            message.style.color = "red";

            return;
        }


        let users = JSON.parse(localStorage.getItem("users")) || [];


        const existingUser = users.find(function(user) {

            return user.email === email;

        });


        if (existingUser) {

            message.textContent = "An account with this email already exists.";

            message.style.color = "red";

            return;
        }


        const newUser = {

            name: name,

            email: email,

            password: password

        };


        users.push(newUser);


        localStorage.setItem("users", JSON.stringify(users));


        message.textContent = "Account created successfully!";

        message.style.color = "green";

        setTimeout(function() {

            window.location.href = "login.html";

        }, 1500);

    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const email = document.getElementById("loginEmail").value.trim();

        const password = document.getElementById("loginPassword").value;

        const rememberMe = document.getElementById("rememberMe").checked;

        const message = document.getElementById("loginMessage");


        const users = JSON.parse(localStorage.getItem("users")) || [];


        const user = users.find(function(user) {

            return user.email === email &&
                   user.password === password;

        });


        if (!user) {

            message.textContent =
                "Incorrect email or password.";

            message.style.color = "red";

            return;
        }


        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(user)
        );


        if (rememberMe) {

            localStorage.setItem(
                "rememberMe",
                "true"
            );

        }


        message.textContent =
            "Login successful!";

        message.style.color = "green";


        setTimeout(function() {

            window.location.href = "index.html";

        }, 1000);

    });
}


function forgotPassword() {

    alert(
        "Password recovery will be available in a future version."
    );

}
