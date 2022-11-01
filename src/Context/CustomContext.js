import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();


const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        let cantidad = 0;
        cart.forEach((producto)=>
            cantidad = cantidad + producto.qty
    )
    setCantidad(cantidad);
}, [cart])

    const añadir = (producto, cantidad) => {
        const productoExistente = cart.findIndex(cantidadCart => cantidadCart.cantidad.id == cantidad.id)
        if (estaEnLista(producto.id)) {
            const cartNuevo = cart.filter (producto => producto !== cart[productoExistente])
            setCart([{ producto, cantidad }, ...cartNuevo])
    } else {
        setCart([...cart, { producto, cantidad }]);
    }
};

    const borrar = (id) => {
        const arrayFiltrado = cart.filter((producto) => {
            return producto.id !== id;
    });
    setCart(arrayFiltrado);
};

    const estaEnLista = (id) => cart.some((producto) => producto.id === id);

    const reset = () => {
    setCart([]);
};


    return (
        <Context.Provider
            value={{
                cantidad,
                cart,
                añadir,
                borrar,
                reset,
        }}
>
    {children}
    </Context.Provider>
);
};

export default CustomProvider;