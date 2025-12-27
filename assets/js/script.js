// Fase 1
console.log("Portofolio loaded successfully");

// Fase 2
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });

        // Close menu on mobile
        navMenu.classList.remove("active");
    });
});

// Projects Data Section
const projects = [
    {
        title: "Portofolio Website",
        description: "Website profil diri menggunakan HTML, CSS, dan JavaScript"
    }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
    const div = document.createElement("div");
    div.className = "project-card";
    div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectList.appendChild(div);
});

// Dark Mode
const themeBtn = document.getElementById("toggle-theme");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Navbar Toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
})