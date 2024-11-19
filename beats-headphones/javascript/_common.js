function scrollListener ()  {
    document.addEventListener("scroll", () => {
        const scrollElement = document.querySelector(".scroll-list");
        const sections = document.querySelectorAll(".section");
        let sectionColorScheme = "light";

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const middleOfTheScreen = window.innerHeight / 2;
            const checkSectionColor = rect.top <= middleOfTheScreen && rect.bottom >= middleOfTheScreen

            if (checkSectionColor) {
                sectionColorScheme = section.dataset.colorScheme;
                if (sectionColorScheme === 'dark') {
                    scrollElement.classList.add('scroll-list--light');
                } else {
                    scrollElement.classList.remove('scroll-list--light');
                }
            }
        });
    });
}

export { scrollListener }
