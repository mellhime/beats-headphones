function smoothScrolling () {
  const sections = document.querySelectorAll(".section");
  const main = document.querySelector(".main")
  let isScrollInProgress = false;

  const performTransition = function(sectionEq) {
    if (isScrollInProgress) return;

    isScrollInProgress = true;
    const position = sectionEq * -100 + "vh";

    sections.forEach((section, index) => {
      if (index === sectionEq) {
        section.classList.add("section--active");
      } else {
        section.classList.remove("section--active");
      }
    });

    main.style.transform = `translateY(${position})`;

    setTimeout(function() {
      isScrollInProgress = false;
    }, 1300); // 1300 - .main (1s) + 300ms delay
  };

  const scrollToSection = function(direction) {
    const activeSection = document.querySelector(".section--active");
    const nextSection = activeSection.nextElementSibling;
    const prevSection = activeSection.previousElementSibling;
    const nextSectionIndex = Array.from(sections).indexOf(nextSection)

    if (nextSectionIndex === -1 && direction === 'next') return

    if (direction === "next" && nextSection) {
      performTransition(nextSectionIndex);
    }

    if (direction === "prev" && prevSection) {
      performTransition(Array.from(sections).indexOf(prevSection));
    }
  };

  document.querySelector(".wrapper").addEventListener("touchmove", e => e.preventDefault());

  document.querySelector(".wrapper").addEventListener("wheel", function (e) {
    e.preventDefault()
    const deltaY = e.deltaY;

    if (deltaY > 0) {
      scrollToSection("next");
    }

    if (deltaY < 0) {
      scrollToSection("prev");
    }
  });

  // Обработка событий клавиатуры
  document.addEventListener("keydown", e => {
    switch (e.code) {
      case "ArrowDown": // Стрелка вниз
        e.preventDefault()
        scrollToSection("next");
        break;
      case "ArrowUp": // Стрелка вверх
        e.preventDefault()
        scrollToSection("prev");
        break;
    }
  });
}

export { smoothScrolling }
