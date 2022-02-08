let alertContainer = document.querySelector(".alert-container")
let openBtn = document.querySelector(".open-button")

openBtn.addEventListener("click", function() {
  alertContainer.classList.add("visible")
})

let closeBtn = document.querySelector(".close")
closeBtn.addEventListener("click", function() {
  alertContainer.classList.remove("visible")
})