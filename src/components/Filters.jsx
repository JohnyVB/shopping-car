import { useId, useContext } from 'react';
import { FiltersContext } from '../context/FiltersContext';
import './Filters.css';

export const Filters = () => {
    const { filters, setFilters } = useContext(FiltersContext);
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handledMinPrice = (event) => {
        setFilters(prev => ({
            ...prev,
            minPrice: event.target.value
        }))
    }

    const handledCategory = (event) => {
        setFilters(prev => ({
            ...prev,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input type="range" id={minPriceFilterId} min={0} max={1000} value={filters.minPrice} onChange={handledMinPrice} />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handledCategory}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>

        </section>
    )
}
