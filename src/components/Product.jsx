import Cart from './Cart'
import AltNav from './AltNav'
import SideBar from './SideBar'
import Context from './Context'
import LoadingSpin from './LoadingSpin'
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'

const Product = () => {
    const myID = useParams().id
    const { msg, Link, colors, productInfo, setIsLoading,
        fetchProduct, isLoading, addToCart } = useContext(Context)

    useEffect(() => {
        (async () => await fetchProduct(myID))()
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    const { id, name, description, company, url, formatPrice } = productInfo
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
                    {isLoading ?
                        <LoadingSpin /> :
                        <>{msg ?
                            <p>{msg}</p> :
                            <article id="container" className="md:grid-cols-2 md:gap-8">
                                <img src={url} alt={name} />
                                <div className="sub-container">
                                    <h3 className="title">{name}</h3>
                                    <p className="subtitle">by {company}</p>
                                    <span className="price">${formatPrice}</span>
                                    <div className="round-shape">
                                        {colors.map((color, index) => (
                                            <span key={index} style={{ background: color }}></span>
                                        ))}
                                    </div>
                                    <p className="texts">{description}</p>
                                    <button type="button" className="product-cart"
                                        onClick={() => addToCart(id)}>
                                        add to cart
                                    </button>
                                </div>
                            </article>}
                        </>
                    }
                </section>
            </section>
            <Cart />
            <SideBar />
        </>
    )
}

export default Product
