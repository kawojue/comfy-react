import Context from './Context'
import { useContext } from 'react'

const FilterButtons = () => {
    const btns = ['all', 'ikea', 'marcos', 'caressa', 'liddy']
    const { filteredProducts, allProducts } = useContext(Context)

    return (
        <>
            {btns.map((btn, index) => (
                <button key={index} onClick={async () => await filteredProducts(btn)}>
                    {btn}
                </button>
            ))}
        </>
    )
}

export default FilterButtons
