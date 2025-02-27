const sections = document.querySelectorAll(".section");
const main = document.querySelector(".main")
const scrollElement = document.querySelector(".scroll-list");
let isScrollInProgress = false;

const performMenuChange = function(sectionIndex) {
  let sectionColorScheme = sections[sectionIndex].dataset.colorScheme;
  if (sectionColorScheme === 'dark') {
    scrollElement.classList.add('scroll-list--light');
  } else {
    scrollElement.classList.remove('scroll-list--light');
  }

  const menuElements = document.querySelectorAll(".scroll-list__dot");
  const prevDot = document.querySelector(".scroll-list__dot--active");
  const activeDot = menuElements[sectionIndex]
  prevDot.classList.remove('scroll-list__dot--active');
  activeDot.classList.add('scroll-list__dot--active');
}

const performTransition = function(sectionIndex) {
  if (isScrollInProgress) return;

  isScrollInProgress = true;
  const position = sectionIndex * -100 + "vh";

  sections.forEach((section, index) => {
    if (index === sectionIndex) {
      section.classList.add("section--active");
    } else {
      section.classList.remove("section--active");
    }
  });

  setTimeout(function() {
    performMenuChange(sectionIndex)
  }, 500);

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

function smoothScrolling () {
  document.querySelector(".wrapper").addEventListener("touchmove", e => e.preventDefault());

  document.querySelector(".wrapper").addEventListener("wheel", function (e) {
    e.preventDefault()

    const collapsedMenu = document.querySelector(".navigation__list--collapsed")

    if (collapsedMenu) return
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

  scrollElement.addEventListener("click", function (e) {
    e.preventDefault()

    const scrollDots = document.querySelectorAll(".scroll-list__dot");
    const dotIndex = Array.from(scrollDots).indexOf(e.target)
    if (dotIndex === -1) return
    performTransition(dotIndex)
  });

  const navigationList = document.querySelector(".navigation__list");
  const navigationDict = {
    "about": "info",
    "headphones": "purchase",
    "team": "team",
    "colors": "colors",
    "reviews": "reviews",
    "work": "work",
    "contacts": "contacts"
  }

  navigationList.addEventListener("click", function (e) {
    e.preventDefault()

    const itemTag = e.target.dataset.tag
    const nextSection = document.querySelector(`.${navigationDict[itemTag]}`)
    const nextSectionIndex = Array.from(sections).indexOf(nextSection)
    if (nextSectionIndex === -1) return
    performTransition(nextSectionIndex)

    const collapsedMenu = document.querySelector(".navigation__list--collapsed")
    if (collapsedMenu) {
      document.querySelector(".navigation__list").classList.remove('navigation__list--collapsed');
      document.querySelector(".navigation__button").classList.remove('navigation__button--active');
    }
    // TODO menu items are disappearing after first transition
  });
}

export { smoothScrolling }
