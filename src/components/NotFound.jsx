import AltNav from './AltNav'
import Cart from './Cart'
import SideBar from './SideBar'

const NotFound = () => {
    return (
        <section>
            <AltNav />
            <Cart />
            <SideBar />
            <p className="text-5xl font-medium">Page not found.</p>
        </section>
    )
}

export default NotFound