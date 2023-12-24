const BBDD = [
    {
        usuario: "lucas",
        contraseña: "123",
    },
    {
        usuario: "facundo",
        contraseña: "racing123",
    },
    {
        usuario: "sofia",
        contraseña: "perritos456"
    }
]


//LOGIN
//PERMITIR LOGEAR UN USUARIO, VALIDANDO LAS CREDENCIALES Y EN BASE A ESO, MOSTRAR UNA BIENVENIDA
// SI NO EXISTE, MOSTRAR UN ERROR

function pintarVerde(nombre) {
    const contenedor = document.querySelector("#contenedor");

    contenedor.classList.add("bg-green-500")

    contenedor.innerHTML = `<span>Bienvenido sr/sra ${nombre} </span>`

    setTimeout( ()=> {
        window.location.href = '../home.html'
    }, 3000)
}

const isAuth = JSON.parse(localStorage.getItem("user")) // nos trae un objeto o null

if (isAuth) {

    pintarVerde(isAuth.usuario)

}





const inputUsuario = document.querySelector("#usuario");

const inputPassword = document.querySelector("#password")

const botonIniciar = document.querySelector("#btn-iniciar")



const usuarioALoguear = {

    usuario: '',

    password: ''

}

inputUsuario.addEventListener("input", (e) => { // e -> objeto 

    //    console.log(e.target.value) // trae infformacion del NODO - input.value

    usuarioALoguear.usuario = e.target.value

})


inputPassword.addEventListener("input", (e) => {

    usuarioALoguear.password = e.target.value

})


botonIniciar.addEventListener("click", (e) => {

    const usuarioEncontrado = BBDD.find((el) => {

        return usuarioALoguear.usuario === el.usuario && usuarioALoguear.password === el.contraseña

    }) // retornar el elemento o undefined


    if (usuarioEncontrado) {

        const stringify = JSON.stringify({ usuario: usuarioEncontrado.usuario })

        localStorage.setItem("user", stringify)


        pintarVerde(usuarioEncontrado.usuario)


    } else {

        // la parte del usuario no encontrado

        console.log("no se encontro el usuario")

    }

})



