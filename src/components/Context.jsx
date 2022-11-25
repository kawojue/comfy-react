import { Link } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import { SlMagnifier } from 'react-icons/sl'
import { BsFillCartFill } from 'react-icons/bs'
import { createContext, useState, useEffect } from 'react'
import { FaBars, FaHome, FaCouch, FaBook } from 'react-icons/fa'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const btns = ['all', 'ikea', 'marcos', 'caressa', 'liddy']
    const cartUrl = "http://localhost:3500/carts"
    const allProductsUrl = 'https://course-api.com/javascript-store-products'
    const singleProductUrl = 'https://course-api.com/javascript-store-single-product'

    const [msg, setMsg] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [allProducts, setAllProducts] = useState([])
    const [search, setSearch] = useState("")
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

            // get & set featured products
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

    useEffect(() => {
        (async () => await fetchProducts())()
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    const filteredProducts = async (action) => {
        try {
            const res = await fetch(allProductsUrl)
            const data = await res.json()
            const products = []
            data.forEach(d => {
                if (d.fields.company === action || action === 'all') {
                    products.push(d)
                }
            })
            setAllProducts(products)
        } catch (err) {
            setMsg("Please, reload the page.")
        }
    }

    return (
        <Context.Provider value={{
            Link, GrClose, BsFillCartFill,
            FaBars, FaHome, FaCouch, FaBook,
            allProducts, isLoading, msg, setMsg,
            sidebarModal, setSidebarModal,
            cartModal, setCartModal,
            featuredProducts, SlMagnifier,
            filteredProducts, btns, search,
            setSearch, singleProductUrl, setIsLoading
        }}>
            {children}
        </Context.Provider>
    )
}

// cart & filtration (ongoing).

export default Context
