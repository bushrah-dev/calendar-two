let monthEl = document.getElementById("month")
let dayEl = document.getElementById("day")
let dateEl = document.getElementById("dayNum")
let yearEl = document.getElementById("year")

let date = new Date()
let month = date.getMonth()
monthEl.innerHTML = date.toLocaleDateString("en", {
    month: "long"
})
dayEl.innerHTML = date.toLocaleDateString("en", {
    weekday: "long"
})
dateEl.innerHTML = date.getDate()
yearEl.innerHTML = date.getFullYear()
