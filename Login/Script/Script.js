document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.querySelector(".sign-in form");
    const signInLink = document.getElementById("signInLink");
    const loadingScreen = document.getElementById("loadingScreen");
    const progressBar = document.getElementById("progressBar");

    signInLink.addEventListener("click", function (event) {
        event.preventDefault();
        
        const email = signInForm.querySelector('input[type="email"]').value.trim();
        const password = signInForm.querySelector('input[type="password"]').value.trim();

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        document.getElementById("emailError").style.display = "none";
        document.getElementById("passwordError").style.display = "none";

        if (email !== "" && password !== "") {
            if (!emailRegex.test(email)) {
                document.getElementById("emailError").style.display = "block"; 
            } else {
                
                loadingScreen.style.display = "flex";
                loadingScreen.style.opacity = "1"; 

                let progress = 0;
                let interval = setInterval(function () {
                    progress += 10;
                    progressBar.style.width = progress + "%"; 

                    if (progress >= 100) {
                        clearInterval(interval); 
                        setTimeout(function () {
                            window.location.href = "/Home/Home.html"; 
                        }, 500);
                    }
                }, 200); 
            }

            if (password === "") {
                document.getElementById("passwordError").style.display = "block"; 
            }
        } else {
            if (email === "") {
                document.getElementById("emailError").style.display = "block"; 
            }
            if (password === "") {
                document.getElementById("passwordError").style.display = "block"; 
            }
        }
    });
});
