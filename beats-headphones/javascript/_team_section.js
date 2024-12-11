export default function teamDescriptionListener ()  {
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
}
