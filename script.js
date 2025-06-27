// ✅ Check session only if you're on dashboard.html
if (window.location.pathname.includes("dashboard.html")) {
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";  // Redirect to login if not authenticated
  }
}

// ✅ Theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
}

// ✅ Logout function
function logout() {
  sessionStorage.clear();
  window.location.href = "index.html";
}

// ✅ Navigate to dashboard
function goToDashboard() {
  window.location.href = "dashboard.html";
}

// ✅ Run on window load
window.onload = () => {
  // ✅ Apply stored theme
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark");
  }

  // ✅ LOGIN handler
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const user = document.getElementById("username").value.trim();
      const pass = document.getElementById("password").value;

      const storedUser = localStorage.getItem("username") || "admin";
      const storedPass = localStorage.getItem("password") || "1234";

      if (user === storedUser && pass === storedPass) {
        sessionStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", user);  // for avatar, etc.

        // ✅ Redirect to dashboard after successful login
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("errorMsg").textContent = "❌ Invalid username or password!";
      }
    });
  }

  // ✅ SIGNUP handler
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newUser = document.getElementById("newUsername").value.trim();
      const newPass = document.getElementById("newPassword").value;

      if (!newUser || !newPass) {
        alert("⚠️ Username and password cannot be empty");
        return;
      }

      localStorage.setItem("username", newUser);
      localStorage.setItem("password", newPass);

      alert("✅ Registered successfully. Now log in.");
      window.location.href = "index.html";
    });
  }
};
