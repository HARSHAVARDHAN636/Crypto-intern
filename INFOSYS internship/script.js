document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let role = document.getElementById("role").value;

    if (name === "" || email === "" || password === "") {
        alert("All fields are required!");
        return;
    }

    // Store user role in local storage for session management
    localStorage.setItem("userRole", role);

    // Redirect to the respective dashboard
    if (role === "admin") {
        window.location.href = "dashboard_admin.html";
    } else if (role === "trainer") {
        window.location.href = "dashboard_trainer.html";
    } else {
        window.location.href = "dashboard_customer.html";
    }
});

// Logout function (also available for dashboard pages)
function logout() {
    localStorage.removeItem("userRole");
    window.location.href = "index.html";
}
