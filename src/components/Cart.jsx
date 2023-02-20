import './Cart.css';
import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons.jsx';
import { useCart } from "../hooks/useCart.js";
import { CartItem } from '../helpers/CartItem';

export const Cart = () => {
    const cartCheckBoxId = useId();
    const { cart, cleanCart, addToCart } = useCart();

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckBoxId}><CartIcon /></label>
            <input id={cartCheckBoxId} type="checkbox" hidden />

            <aside className='cart'>
                <ul>
                    {
                        cart.map(product => (
                            <CartItem key={product.id} {...product} addToCart={() => addToCart(product)} />
                        ))
                    }
                </ul>
                {
                    cart.length !== 0 && (
                        <button onClick={() => cleanCart()}>
                            <ClearCartIcon />
                        </button>
                    )
                }
            </aside>
        </>
    )
}
