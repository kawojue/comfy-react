import Context from './Context'
import { useContext } from 'react'

const FilterButtons = () => {
    const { filteredProducts, btns } = useContext(Context)

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
