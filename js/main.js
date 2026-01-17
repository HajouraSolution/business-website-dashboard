<<<<<<< HEAD
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (name === "" || email === "" || message === "") {
        errorMsg.textContent = "Please fill in all fields.";
        return;
    }

    if (!email.includes("@")) {
        errorMsg.textContent = "Please enter a valid email address.";
        return;
    }

    errorMsg.textContent = "";
    alert("Message sent successfully!");
    document.getElementById("contactForm").reset();
});

// LOAD CONTENT FROM ADMIN
window.addEventListener("DOMContentLoaded", function () {
    const savedContent = localStorage.getItem("homeContent");

    if (savedContent && document.getElementById("homeText")) {
        document.getElementById("homeText").textContent = savedContent;
    }
=======
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (name === "" || email === "" || message === "") {
        errorMsg.textContent = "Please fill in all fields.";
        return;
    }

    if (!email.includes("@")) {
        errorMsg.textContent = "Please enter a valid email address.";
        return;
    }

    errorMsg.textContent = "";
    alert("Message sent successfully!");
    document.getElementById("contactForm").reset();
});

// LOAD CONTENT FROM ADMIN
window.addEventListener("DOMContentLoaded", function () {
    const savedContent = localStorage.getItem("homeContent");

    if (savedContent && document.getElementById("homeText")) {
        document.getElementById("homeText").textContent = savedContent;
    }
>>>>>>> 5d0f22ba418c81b6b8644df6650a175588d83af0
});