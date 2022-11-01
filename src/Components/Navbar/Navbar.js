import React from "react";
import logo from "../../assets/logo.png";
import { Nav } from "./Nav"
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"



const Navbar = ({nombre, apellido, id, children }) => {

    const categorias = [ 
        { id: 0, nombre: 'Electrónicos', ruta:"/categoria/electronicos" },
        { id: 1, nombre: 'Joyería', ruta:"/categoria/joyas" },
        { id: 2, nombre: 'Vestimenta masculina', ruta:"/categoria/vestimentahombre"  },
        { id: 3, nombre: 'Vestimenta femenina', ruta:"/categoria/vestimentamujer" },
    ]
    
    return (
        <>
        <header style={styles.container}>
            <Link to="/">
            <img style={imagen.container2} src={logo} alt="logo" />
            </Link>
            <h1>¡Seas bienvenido/a!</h1>
            <Navbar categorias={categorias}/>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </header>
        </>
    )
}

const styles = {
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

const imagen = {
    container2:{
        width: '8%'
    }
}

const links = {
    container3:{
        padding: 10,
    }
}

export default Navbar