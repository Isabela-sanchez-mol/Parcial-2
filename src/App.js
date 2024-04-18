import React, {useEffect} from "react";
import {app} from "./fb";
import Home from './Home';
import Login from './Login';
import {getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const[usuario, setUsuario]= React.useState(null);
  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged (auth, (usuarioFirebase) => {
      console.log("Ya tienes sesión iniciada con: ", usuarioFirebase);
      setUsuario(usuarioFirebase);
    });
  },[]);

  return <>{usuario ? <Home /> : <Login setUsuario={setUsuario} /> } </>;
}

export default App;
