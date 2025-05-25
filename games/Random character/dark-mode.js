const themeToggle = document.createElement("button");
themeToggle.id = "theme-toggle";
themeToggle.classList.add("dark-mode");
themeToggle.textContent = "🌙";
document.body.prepend(themeToggle);

themeToggle.addEventListener("click",()=>{

    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode"); 
        document.body.classList.add("light-mode");
        themeToggle.textContent = "🌙";
        themeToggle.classList.remove("light-mode")
        themeToggle.classList.add("dark-mode")
    }
    else {
        document.body.classList.remove("light-mode"); 
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️"
        themeToggle.classList.remove("dark-mode")
        themeToggle.classList.add("light-mode")
    }
});
