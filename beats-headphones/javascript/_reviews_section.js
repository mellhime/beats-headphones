export default function reviewsListener ()  {
    const reviewsList = document.getElementsByClassName('reviews__person');
    const reviewsContentList = document.getElementsByClassName('reviews__item');

    [...reviewsList].forEach((el) => {
        el.addEventListener("click", function () {
            let liElem = el
            if (!liElem.classList.contains('reviews__person--active')) {
                [...reviewsList].forEach((el) => {
                    el.classList.remove('reviews__person--active');
                });

                [...reviewsContentList].forEach((item) => {
                    item.classList.remove('reviews__item--active');
                })

                let author = liElem.dataset.previewAuthor
                let fullReviewElement = document.querySelector(`[data-author=${author}]`)

                fullReviewElement.classList.add('reviews__item--active')
                liElem.classList.add('reviews__person--active');
            }
        });
    });
}
