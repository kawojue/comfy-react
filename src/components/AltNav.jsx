import Context from './Context'
import { useContext } from 'react'

const AltNav = () => {
    const { Link, FaBars, BsFillCartFill,
        setCartModal, setSidebarModal, cartsLength } = useContext(Context)

    return (
        <nav className="navbar-2 lg:px-20 md:px-10 px-7 lg:py-4">
            <div>
                <ul className="nav-links md:flex">
                    <li>
                        <Link to="/home" target="_blank">
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            products
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            about
                        </Link>
                    </li>
                </ul>
                <button type="button" title="sidebar"
                    onClick={() => setSidebarModal(true)}
                    className="open-sidebar text-white hover:bg-pry-clr-3 md:hidden">
                    <FaBars />
                </button>
            </div>
            <img src="/images/logo-black.svg" alt="logo-black" />
            <button type="button" title="cart"
                className="cart-open relative"
                onClick={() => setCartModal(true)}>
                <span
                    className="cart-no">
                    {cartsLength}
                </span>
                <span className="text-[25px]">
                    <BsFillCartFill />
                </span>
            </button>
        </nav>
    )
}

export default AltNav
