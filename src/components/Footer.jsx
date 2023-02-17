
import { useContext } from 'react'
import { IS_DEVELOPMENT } from '../config'
import { FiltersContext } from '../context/FiltersContext'
import './Footer.css'

export function Footer() {
    const { filters } = useContext(FiltersContext);
    return (
        <footer className='footer'>
            <h4>React ⚛️ Shop</h4>
            <h5>Shopping Cart con useContext & useReducer</h5>
            <h5>{
                IS_DEVELOPMENT && JSON.stringify(filters, null, 2)
            }</h5>
        </footer>
    )
}