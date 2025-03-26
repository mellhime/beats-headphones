export default function burgerNavigationListener () {
    const burgerNavigation = document.querySelector('.navigation__button')
    burgerNavigation.addEventListener("click", function () {
        const navList = document.querySelector('.navigation')
        if (burgerNavigation.classList.contains('navigation__button--active')) {
            burgerNavigation.classList.remove('navigation__button--active');
            navList.classList.remove('navigation--collapsed');
        } else {
            burgerNavigation.classList.add('navigation__button--active');
            navList.classList.add('navigation--collapsed');
        }
    });
}
