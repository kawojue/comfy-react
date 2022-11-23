import Nav from './Nav'
import Cart from './Cart'
import Hero from './Hero'
import SideBar from './SideBar'

const Header = () => {
    return (
        <header className="hero">
            <Nav />
            <SideBar />
            <Cart />
            <Hero />
        </header>
    )
}

export default Header