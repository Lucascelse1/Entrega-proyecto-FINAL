const logAgain = document.querySelector("#log-again")
const closeBtn = document.querySelector("#close")
const closeDiv = document.querySelector("#close-div")
const main = document.querySelector("#main")

const storedUser = localStorage.getItem("user")

const userObject = JSON.parse(storedUser)

const username = userObject ? userObject.usuario : ""

logAgain.innerHTML += 'Bienvenido sr/sra ' + username


closeDiv.addEventListener("mouseover", () => {
    closeBtn.classList.remove("hidden")

})

closeDiv.addEventListener("mouseleave", () => {
    closeBtn.classList.add("hidden")


})

closeBtn.addEventListener("click", () => {

    window.location.href = '../index.html'

    localStorage.removeItem("user")//PUEDO PASAR ESTO A UN BOTON QUE DIGA "VOLVER A INICIAR SESION"

})


