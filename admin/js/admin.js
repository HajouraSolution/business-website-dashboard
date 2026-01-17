// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("loginError");

    /*    if (user === "admin" && pass === "1234") {
        localStorage.setItem("isLoggedIn", "true"); */
        window.location.href = "dashboard.html";
    /*    } else {
        error.textContent = "Invalid credentials.";
    } */
});

// AUTH CHECK
if (window.location.pathname.includes("dashboard.html")) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

// SAVE CONTENT
function saveContent() {
    const content = document.getElementById("homeContent").value;
    localStorage.setItem("homeContent", content);
    document.getElementById("successMsg").textContent = "Content saved successfully!";
}

// LOAD CONTENT
window.onload = function () {
    const savedContent = localStorage.getItem("homeContent");
    if (savedContent && document.getElementById("homeContent")) {
        document.getElementById("homeContent").value = savedContent;
    }
};

// LOGOUT
function logout() {
  /*  localStorage.removeItem("isLoggedIn"); */
    window.location.href = "login.html";
}