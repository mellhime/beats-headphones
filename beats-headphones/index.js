console.log('hi')

const teamNamesList = document.getElementsByClassName('team__name');

[...teamNamesList].forEach((el) => {
    el.addEventListener("click", function () {
        let liElem = el.closest('li')
        if (liElem.classList.contains('team__employee--active')) {
            liElem.classList.remove('team__employee--active');
        } else {
            liElem.classList.add('team__employee--active');
        }
    });
});

const colorsList = document.getElementsByClassName('colors__item');

[...colorsList].forEach((el) => {
    el.addEventListener("click", function () {
        let liElem = el
        if (liElem.classList.contains('colors__item--active')) {
            liElem.classList.remove('colors__item--active');
        } else {
            liElem.classList.add('colors__item--active');
        }
    });
});

const glide = new Glide('.glide', {
    perView: 1
})

glide.mount()
