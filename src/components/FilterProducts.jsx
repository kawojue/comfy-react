import Context from './Context'
import { useContext } from 'react'
import FilterButtons from "./FilterButtons"

const FilterProducts = () => {
    const { search, setSearch, filteredProducts, priceRange,
        setPriceRange, setIsLoading, filterValue } = useContext(Context)

    const handleSearch = (e) => {
        (async () => await filteredProducts(e.target.value, 'search'))()
        setSearch(e.target.value)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    const handlePriceRange = (e) => {
        (async () => await filteredProducts(e.target.value, 'price'))()
        setPriceRange(parseInt(e.target.value))
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    return (
        <form className="mx-[2rem] md:mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="search..." className="search-input"
                value={search} onChange={e => handleSearch(e)} />
            <h3>Company</h3>
            <div className="btn-container">
                <FilterButtons />
            </div>
            <input type="range" title="price range" min="5" max="90"
                value={priceRange} onChange={e => handlePriceRange(e)} />
            <h2>
                Value: <span className="range-value">{filterValue}</span>
            </h2>
        </form>
    )
}

export default FilterProducts
