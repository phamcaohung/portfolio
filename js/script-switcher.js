const styleSwitcherToggle = document.querySelector(".style-switcher-toggle")

styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open"))
        document.querySelector(".style-switcher").classList.remove("open")
})

const alternateStyle = document.querySelectorAll(".alternate-style")

function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        color === style.getAttribute("title") 
            ? style.removeAttribute("disabled") 
            : style.setAttribute("disabled", "true") 
    })
}

const dayNight = document.querySelector(".day-night")
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})

window.addEventListener("load", () => {
    document.body.classList.contains("dark")
        ? dayNight.querySelector("i").classList.add("fa-sun")
        : dayNight.querySelector("i").classList.add("fa-moon")
})


