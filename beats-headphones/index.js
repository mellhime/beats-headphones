console.log('hi')

// function toggleEmployeeInfo(elem) {
//     let liElem = elem.closest('li')
//     if (liElem.classList.contains('team__employee--active')) {
//         liElem.classList.remove('team__employee--active');
//     } else {
//         liElem.classList.add('team__employee--active');
//     }
// }

const teamNamesList = document.getElementsByClassName('team__name'); // HTML collection
const teamNamesListArray = [...teamNamesList]; // Array
const teamNamesListArray2 = Array.from(teamNamesList); // Array

console.log(teamNamesList);
console.log(teamNamesListArray);
console.log(teamNamesListArray2);

teamNamesListArray.forEach((el) => {
    console.log(el);
    el.addEventListener("click", function (elem) {
        let liElem = elem.closest('li')
        if (liElem.classList.contains('team__employee--active')) {
            liElem.classList.remove('team__employee--active');
        } else {
            liElem.classList.add('team__employee--active');
        }
    });
});
