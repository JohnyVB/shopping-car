import { useState } from 'react';
import './Filters.css';

export const Filters = ({setFilters}) => {
    const [minPrice, setMinPrice] = useState(0);

    const handledMinPrice = (event) => {
        setMinPrice(event.target.value);
        setFilters(prev => ({
            ... prev,
            minPrice: event.target.value
        }))
    }

    const handledCategory = (event) => {
        setFilters(prev => ({
            ... prev,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Price</label>
                <input type="range" id="price" min={0} max={1000} onChange={handledMinPrice} />
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category" onChange={handledCategory}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>

        </section>
    )
}
