import Context from './Context'
import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const { singleProductUrl, isLoading, setIsLoading, msg, setMsg } = useContext(Context)

    const fetchProduct = async ID => {
        const res = await fetch(`${singleProductUrl}?id=${ID}`)
        const data = await res.json()
        setProduct(data)
    }

    useEffect(() => {
        (async () => await fetchProduct(id))()
    }, [])

    return (
        <div>Product</div>
    )
}

export default Product