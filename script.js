document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginSuccess = true;
    if (loginSuccess) {
        window.location.href = "home.html";
    } else {
        document.getElementById("errorMessage").innerText = "Login failed. Please check your username and password.";
    }
});

document.getElementById("homeLink").addEventListener("click", function(event) {
    var isLoggedIn = false; 
    if (!isLoggedIn) {
        event.preventDefault();
        alert("Please log in first.");
    }
});
