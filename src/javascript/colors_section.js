const colorsList = document.getElementsByClassName('colors__item');

[...colorsList].forEach((el) => {
    el.addEventListener("click", function () {
        let liElem = el
        if (liElem.classList.contains('colors__item--active')) {
            liElem.classList.remove('colors__item--active');
        } else {
            [...colorsList].forEach((el) => {
                el.classList.remove('colors__item--active');
            })
            liElem.classList.add('colors__item--active');
        }
    });
});
