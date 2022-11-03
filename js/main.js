
const d = document;

const $daily = d.querySelectorAll(".card__bottom__daily"),
    $weekly = d.querySelectorAll(".card__bottom__weekly"),
    $monthly = d.querySelectorAll(".card__bottom__monthly");

const $profile_daily =
    d.querySelector(".profile__text__daily"),
    $profile_weekly = d.querySelector(".profile__text__weekly"),
    $profile_monthly = d.querySelector(".profile__text__monthly");

const classList = ["profile__text__daily", "profile__text__weekly", "profile__text__monthly"]
const listElements = [$daily, $weekly, $monthly];
const listProfile = [$profile_daily, $profile_weekly, $profile_monthly];

const setDisplay = (element, display) => {
    element.forEach(el => {
        el.style.display = display;
    });

}
function setText() {


    d.addEventListener("click", (e) => {

        let targetClass = e.target.classList[1];

        if (classList.includes(targetClass)) {
            classList.forEach((el, index) => {
                if (el === targetClass) {
                    setDisplay(listElements[index], "flex");
                    listProfile[index].classList.add("profile__text--white")
                } else {
                    setDisplay(listElements[index], "none")
                    listProfile[index].classList.remove("profile__text--white")
                }
            })
        }


    })

}


d.addEventListener("DOMContentLoaded", (e) => {
    listProfile[0].classList.add("profile__text--white");
    setDisplay($daily, "flex")
    setDisplay($weekly, "none")
    setDisplay($monthly, "none")
    setText();
})