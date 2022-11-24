import Context from './Context'
import LoadingSpin from './LoadingSpin'
import { useContext } from 'react'
import ProductsDisplay from './ProductsDisplay'

const FeaturedProducts = () => {
    const { isLoading, msg, Link, featuredProducts } = useContext(Context)

    return (
        <section id="featured" className="py-20 w-full px-8">
            <article className="grid place-items-center">
                <h1 className="text-3xl md:text-4xl text-pry-clr-0 text-center font-medium tracking-wide mb-10">
                    <span className="text-pry-clr-2">/</span> Featured
                </h1>

                {isLoading ?
                    <LoadingSpin /> :
                    <>{msg ?
                        <p>{msg}</p> :
                        <article className='products-container'>
                            {featuredProducts.map(({ id, fields }) => (
                                <ProductsDisplay id={id} {...fields} key={id} />
                            ))}
                        </article>}
                    </>}

                <Link to="/products"
                    className="all-products-btn hover:bg-pry-clr-3">
                    all products
                </Link>
            </article>
        </section>
    )
}

export default FeaturedProducts
