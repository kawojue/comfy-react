import Cart from './Cart'
import AltNav from './AltNav'
import SideBar from './SideBar'
import Context from './Context'
import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'

const Product = () => {
    const myID = useParams().id
    const [product, setProduct] = useState({})
    const [colors, setColors] = useState([])
    const { singleProductUrl, msg, setMsg, Link } = useContext(Context)

    const fetchProduct = async ID => {
        setMsg(null)
        try {
            const res = await fetch(`${singleProductUrl}?id=${ID}`)
            const data = await res.json()
            const { id, fields } = data
            const { name, description, company, colors, image, price } = fields
            const { url } = image[0]
            const info = { id, name, description, company, colors, url, price }
            setProduct(info)
            setColors(colors)
        } catch {
            setMsg("Product not found! Or check your internet connection.")
        }
    }

    useEffect(() => {
        (async () => await fetchProduct(myID))()
    }, [])

    const { id, name, description, company, url, price } = product
    document.title = name

    return (
        <>
            <AltNav />
            <section className="nav-header md:px-20">
                <h1 className="nav-header-h1 md:text-3xl">
                    Home / Product / {name}
                </h1>
            </section>
            <section className="text-center">
                <div className="mt-10 mb-24">
                    <Link to="/products" className="px-8 py-2 btn trans hover:bg-pry-clr-13">
                        go back
                    </Link>
                </div>

                <section className="grid place-items-center w-full mb-20">
                    {msg ?
                        <p>{msg}</p> :
                        <article id="container" className="md:grid-cols-2 md:gap-8">
                            <img src={url} alt={name} />
                            <div className="sub-container">
                                <h3 className="title">{name}</h3>
                                <p className="subtitle">{company}</p>
                                <span className="price">${parseInt(price) / 100}</span>
                                <div className="round-shape">
                                    {colors.map((color, index) => (
                                        <span key={index} style={{ background: color }}></span>
                                    ))}
                                </div>
                                <p className="texts">{description}</p>
                                <button type="button" className="product-cart">
                                    add to cart
                                </button>
                            </div>
                        </article>}
                </section>
            </section>
            <Cart />
            <SideBar />
        </>
    )
}

export default Product
