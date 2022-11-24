import Context from './Context'
import { useContext } from 'react'
import FilterButtons from "./FilterButtons"

const FilterProducts = () => {
    const { search, setSearch } = useContext(Context)

    return (
        <form className="mx-[2rem] md:mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="search..." className="search-input"
                value={search} onChange={(e) => setSearch(e.target.value)} />
            <h3>Company</h3>
            <div className="btn-container">
                <FilterButtons />
            </div>
            <input type="range" title="price range" min="5" max="90" />
            <h2>
                Value: <span className="range-value">all</span>
            </h2>
        </form>
    )
}

export default FilterProducts
