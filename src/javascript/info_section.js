export default function burgerNavigationListener () {
    const burgerNavigation = [...document.getElementsByClassName('navigation-button')][0];
    burgerNavigation.addEventListener("click", function () {
        let ulElem = [...document.getElementsByClassName('navigation__list')][0]
        if (burgerNavigation.classList.contains('navigation-button--active')) {
            burgerNavigation.classList.remove('navigation-button--active');
            ulElem.classList.remove('navigation__list--collapsed');
        } else {
            burgerNavigation.classList.add('navigation-button--active');
            ulElem.classList.add('navigation__list--collapsed');
        }
    })
}
