function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu && icon) {
        menu.classList.toggle("open"); 
        icon.classList.toggle("open"); 
    }
}

// Add event listener to handle clicks
document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);



