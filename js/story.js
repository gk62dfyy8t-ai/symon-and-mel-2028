const chapters = document.querySelectorAll(".chapter");

chapters.forEach((chapter) => {

    const button = chapter.querySelector(".chapter-button");

    if (!button) return;

    button.addEventListener("click", () => {

        chapters.forEach((item) => {

            if (item !== chapter) {
                item.classList.remove("active");
            }

        });

        chapter.classList.add("active");

    });

});