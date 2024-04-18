import React from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {app} from "./fb";
import "./style2.css"

const Login = (props) => {

    const [isRegistrando, setIsRegistrado]=React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(""); // Estado para manejar el mensaje de error


const crearUsuario = (correo, password) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, correo, password)
    .then((usuarioFirebase) => {
        console.log("Usuario creado: ", usuarioFirebase);
        props.setUsuario(usuarioFirebase);
    })


    .catch((error) => {
        setErrorMessage("Usuario no registrado, por favor, regístrate para acceder a esta página."); // Captura y establece el mensaje de error en caso de fallo
    });

};

const iniciarSesion =(correo,password) =>{
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth,correo,password).then((usuarioFirebase)=>{
        console.log("Sesión iniciada con: ", usuarioFirebase.user);
        props.setUsuario(usuarioFirebase)
    })

    .catch((error) => {
        setErrorMessage("Usuario no registrado, por favor, regístrate para acceder a esta página."); // Captura y establece el mensaje de error en caso de fallo
    });
};

const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;
    
    if (isRegistrando){
        crearUsuario(correo,password);
    }

    if (!isRegistrando){
        iniciarSesion(correo,password);
    }
};

    return(
        <div class="login">
            <div class="login-cont">

            <h1> {isRegistrando ? "Regístrate": "Iniciar Sesión"}</h1> 
            {errorMessage && (
                <div style={{ backgroundColor: "red", color: "white", padding: "10px", marginBottom: "10px" }}>
                    {errorMessage}</div>
            )}        
            <form onSubmit={submitHandler}>
                <label htmlFor="emailField">Correo</label>
                <input type="email" id="emailField"/>
                <label htmlFor="passwordField">Contraseña</label>
                <input type="password" id="passwordField"/>
                <button class="btn_login" type="submit">{isRegistrando ? "Regístrate": "Iniciar Sesión"}</button>
            </form>
            <button class="btn_login" onClick={ ()=> setIsRegistrado(!isRegistrando)}>
            {isRegistrando ? "¿Ya tienes cuenta? Inicia sesión": "¿No tienes cuenta? Regístrate gratis"}
            </button>
            </div>

        </div>
    )
}

export default Login;
