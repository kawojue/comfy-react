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
    const [priceRange, setPriceRange] = useState(0)
    const [filterValue, setFilterValue] = useState('all')
    const [cartModal, setCartModal] = useState(false)
    const [carts, setCarts] = useState([])
    const [cartsLength, setCartsLength] = useState(0)
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

    const filteredProducts = async (type, action = 'btn') => {
        setIsLoading(true)
        try {
            const res = await fetch(allProductsUrl)
            const data = await res.json()
            const products = []
            data.forEach(d => {
                const { fields } = d
                const { name, price, company } = fields
                const formattedPrice = price / 100
                if (action === 'btn') {
                    if (company === type || type === 'all') {
                        products.push(d)
                        setFilterValue(`${type}`)
                    }
                }
                if (action === 'search') {
                    if (name.includes(type)) {
                        products.push(d)
                    }
                    setFilterValue("searching...")
                }
                if (action === 'price') {
                    if (formattedPrice <= type) {
                        products.push(d)
                        setFilterValue(`${type}`)
                    }
                }
            })
            setAllProducts(products)
        } catch (err) {
            setMsg("Please, reload the page.")
        }
    }

    const fetchCarts = async () => {
        try {
            const res = await fetch(cartUrl)
            const data = await res.json()
            setCarts(data)
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

    useEffect(() => {
        (async () => await fetchCarts())()
    }, [])

    useEffect(() => {
        setCartsLength(carts.length)
    }, [carts])

    return (
        <Context.Provider value={{
            Link, GrClose, BsFillCartFill,
            FaBars, FaHome, FaCouch, FaBook,
            cartModal, setCartModal, SlMagnifier,
            sidebarModal, setSidebarModal,
            filteredProducts, btns, search,
            allProducts, isLoading, msg, setMsg,
            setSearch, singleProductUrl, setIsLoading,
            featuredProducts, cartsLength, priceRange,
            setPriceRange, filterValue
        }}>
            {children}
        </Context.Provider>
    )
}

// cart (ongoing).

export default Context
