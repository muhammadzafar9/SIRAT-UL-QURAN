    document.addEventListener("DOMContentLoaded", function () {
        const menuButton = document.getElementById("menuButton");
        const mobileMenu = document.getElementById("mobileMenu");

        menuButton.addEventListener("click", () => {
            // Toggle visibility of the mobile menu
            mobileMenu.classList.toggle("hidden");
        });
    });


document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("backToTopBtn");

    // Check if the button exists in the DOM
    if (!backToTopBtn) {
        console.log("Back to Top button not found in the DOM.");
        return;
    }

    // Show button when scrolled down
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove("hidden");
            console.log("Button is now visible");
        } else {
            backToTopBtn.classList.add("hidden");
            console.log("Button is hidden");
        }
    });

    // Smooth scroll back to top
    backToTopBtn.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Back to Top button clicked");
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});






