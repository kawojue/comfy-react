import { createContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import { SlMagnifier } from 'react-icons/sl'
import { BsFillCartFill } from 'react-icons/bs'
import { FaBars, FaHome, FaCouch, FaBook } from 'react-icons/fa'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const allProductsUrl = 'https://course-api.com/javascript-store-products'
    const singleProductUrl = 'https://course-api.com/javascript-store-single-product'

    const { id } = useParams()

    const [msg, setMsg] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [allProducts, setAllProducts] = useState([])
    const [singleProduct, setSingleProduct] = useState([])
    const [cartModal, setCartModal] = useState(false)
    const [sidebarModal, setSidebarModal] = useState(false)
    const [featuredProducts, setFeaturedProducts] = useState([])

    const fetchProducts = async () => {
        setIsLoading(true)
        setMsg(null)
        try {
            const res = await fetch(allProductsUrl)
            if (!res.ok) throw new Error("Please, check your connection")
            const data = await res.json()
            setAllProducts(data)

            // get & set fetured products
            const featured = []
            data.forEach(d => {
                if (d.fields.featured) {
                    featured.push(d)
                }
            })
            setFeaturedProducts(featured)
        } catch (err) {
            setMsg("Please, reload the page.")
        }
    }

    const fetchProduct = async id => {
        try {
            const res = await fetch(`${singleProductUrl}/${id}`)
            const data = await res.json()
            setSingleProduct(data)
        } catch (err) {
            setMsg("Product does not exists.")
        }
    }

    useEffect(() => {
        (async () => await fetchProducts())()
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return (
        <Context.Provider value={{
            Link, GrClose, BsFillCartFill,
            FaBars, FaHome, FaCouch, FaBook,
            allProducts, isLoading, msg,
            sidebarModal, setSidebarModal,
            cartModal, setCartModal,
            featuredProducts, SlMagnifier,

        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
