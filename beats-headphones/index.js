console.log('hi')

const teamNamesList = document.getElementsByClassName('team__name');

[...teamNamesList].forEach((el) => {
    el.addEventListener("click", function () {
        let liElem = el.closest('li')
        if (liElem.classList.contains('team__employee--active')) {
            liElem.classList.remove('team__employee--active');
        } else {
            [...teamNamesList].forEach((el) => {
                el.closest('li').classList.remove('team__employee--active');
            })
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
            [...colorsList].forEach((el) => {
                el.classList.remove('colors__item--active');
            })
            liElem.classList.add('colors__item--active');
        }
    });
});

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

const reviewsList = document.getElementsByClassName('reviews__person');
const reviewsContentList = document.getElementsByClassName('reviews__item');

[...reviewsList].forEach((el) => {
    el.addEventListener("click", function () {
        let liElem = el
        if (!liElem.classList.contains('reviews__person--active')) {
            [...reviewsList].forEach((el) => {
                el.classList.remove('reviews__person--active');
            })

            let removingClassList = [...reviewsContentList].forEach((item) => {
                item.classList.remove('reviews__item--active');
            })

            let classListArray = [...liElem.classList]
            let specialClass = classListArray.filter(klass => klass.startsWith("reviews__person--"))[0].split("--")[1]
            let mainClassName = document.getElementsByClassName(`reviews__item--${specialClass}`)[0]

            mainClassName.classList.add('reviews__item--active')
            liElem.classList.add('reviews__person--active');
        }
    });
});

const glide = new Glide('.glide', {
    perView: 1
})

glide.mount()
