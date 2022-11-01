import React, {useContext} from 'react'
import logo from "../../assets/cart.png";
import { Context } from '../../Context/CustomContext';

const CartWidget = () => {
    const {cantidad} = useContext(Context)
    return (
        <div>
            {cantidad > 0 && <p>{cantidad}</p>}
        </div>
    )
}

const cart = () =>{
    return (
        <img style={size.container4} src={cart} alt="cart" />
    )
}

const size = {
    container4:{
        width: '10%'
    }
}

export default CartWidget