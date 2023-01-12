import Context from './Context'
import { useContext } from 'react'

const Hero = () => {
    const { Link } = useContext(Context)

    return (
        <section className="hero-view lg:pl-24 md:pl-10 pl-5">
            <h1 className="hero-h1 lg:text-[84px] md:text-[64px]">
                Rest, Relax, Unwind
            </h1>
            <h3 className="hero-h3 lg:text-[44px] md:text-[24px]">
                Embrace your choices - we do
            </h3>
            <Link to="/products"
                className="shop-btn hover:bg-white hover:text-pry-clr-1 md:text-[16px]">
                shop now
            </Link>
        </section>
    )
}

export default Hero