import React, { useEffect, useState } from "react";
import { getAuth, signOut } from 'firebase/auth';
import {app} from "./fb";
import {getCharacters} from "./api";
import "./style.css"


const Home = (api) => {
    const [personajes, setPersonajes] = useState([]);


    const cerrarSesion=()=>{
        const auth = getAuth(app);
        signOut(auth);

    };

    useEffect(() => {
        getCharacters().then(personajes => {
            setPersonajes(personajes);
        }).catch(error => {
            console.error("Error al obtener personajes:", error);
        });
    }, []);


    return(
        <div>
            <button class="btn_home" onClick={cerrarSesion}>Cerrar Sesión</button>
            <h1 id="home">Bienvenido, sesión iniciada</h1>
            <div id="root">
                <h1 id="personajes">Personajes</h1>
                <main id="personajee">
                    {personajes.map(personaje => (
                        <article key={personaje.id}>
                            <div className="image-container">
                                <img src={personaje.image} alt="Personaje" />
                            </div>
                            <h2>{personaje.name}</h2>
                            <span>{personaje.status}</span>
                        </article>
                    ))}
                </main>
                <script src="api.js"> </script>
            </div>
            
        </div>
    )
}

export default Home;
