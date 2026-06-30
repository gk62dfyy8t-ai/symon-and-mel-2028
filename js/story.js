// ==================================================
// STORY CHAPTERS
// ==================================================

const chapters = document.querySelectorAll(".chapter");

chapters.forEach((chapter) => {

    const button = chapter.querySelector(".chapter-button");

    if (!button) return;

    button.addEventListener("click", () => {

        // Close every other chapter
        chapters.forEach((item) => {

            if (item !== chapter) {
                item.classList.remove("active");
            }

        });

        // Open this chapter
        chapter.classList.add("active");

        // Smoothly scroll to the chapter
        setTimeout(() => {

            chapter.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }, 150);

    });

});


// ==================================================
// MOBILE NAVIGATION
// ==================================================

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuButton){

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}