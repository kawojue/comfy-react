import Context from './Context'
import { useContext } from 'react'

const FilterButtons = () => {
    const { filteredProducts, btns, setIsLoading } = useContext(Context)

    const handleBtn = (btn) => {
        (async () => await filteredProducts(btn))()
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    return (
        <>
            {btns.map((btn, index) => (
                <button key={index} onClick={() => handleBtn(btn)}>
                    {btn}
                </button>
            ))}
        </>
    )
}

export default FilterButtons
