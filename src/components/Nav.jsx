import Context from './Context'
import { useContext } from 'react'

const Nav = () => {
    const { Link, FaBars, BsFillCartFill,
        setCartModal, setSidebarModal } = useContext(Context)

    return (
        <nav className="navbar lg:py-4 lg:px-20 md:px-10">
            <div>
                <ul className="nav-links md:flex">
                    <li>
                        <Link to="./">
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to="./products" target="_blank">
                            products
                        </Link>
                    </li>
                    <li>
                        <Link to="./about" target="_blank">
                            about
                        </Link>
                    </li>
                </ul>
                <button type="button" title="sidebar"
                    onClick={() => setSidebarModal(true)}
                    className="open-sidebar hover:bg-pry-clr-3 md:hidden">
                    <FaBars />
                </button>
            </div>

            <img src="./images/logo-white.svg" alt="logo-white" />
            <button type="button" title="cart"
                className="cart-open relative"
                onClick={() => setCartModal(true)}>
                <span className="cart-no">
                    0
                </span>
                <span className="text-[25px]">
                    <BsFillCartFill />
                </span>
            </button>
        </nav>
    )
}

export default Nav
