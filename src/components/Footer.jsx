
import { IS_DEVELOPMENT } from '../config'
import { useCart } from '../hooks/useCart';
import { useFilters } from '../hooks/useFilters';
import './Footer.css'

export function Footer() {
    const { filters } = useFilters();
    const { cart } = useCart();
    return (
        <footer className='footer'>
            <h4>React ⚛️ Shop</h4>
            <h5>Shopping Cart con useContext & useReducer</h5>
            {
                IS_DEVELOPMENT && (
                    <div>
                        <h5>
                            {JSON.stringify(filters, null, 2)}
                        </h5>
                        <h5>
                            {JSON.stringify(cart, null, 2)}
                        </h5>
                    </div>
                )
            }
        </footer>
    )
}