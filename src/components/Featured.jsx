import Context from './Context'
import LoadingSpin from './LoadingSpin'
import { useContext, useState } from 'react'
import ProductsDisplay from './ProductsDisplay'

const Featured = () => {
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
                        <article className='products-container md:grid-cols-2 lg:grid-cols-3 md:gap-[1.5rem]'>
                            {featuredProducts.map(({ id, fields }) => (
                                <ProductsDisplay id={id} fields={fields} key={id} />
                            ))}
                        </article>}
                    </>}

                <Link to="./products"
                    className="all-products-btn hover:bg-pry-clr-3">
                    all products
                </Link>
            </article>
        </section>
    )
}

export default Featured
