import FilterButtons from "./FilterButtons"

const FilterProducts = () => {
    return (
        <form className="mx-[2rem] md:mx-auto">
            <input type="text" placeholder="search..." className="search-input" />
            <h3>
                Company
            </h3>
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
