import Context from './Context'
import { useContext } from 'react'

const SideBar = () => {
    const { Link, GrClose, FaBook, FaCouch, FaHome,
        setSidebarModal, sidebarModal } = useContext(Context)

    return (
        <aside className={`sidebar ${sidebarModal ? 'show' : 'hidden'}`}>
            <article>
                <button type="button" title="close"
                    onClick={() => setSidebarModal(false)}>
                    <GrClose />
                </button>
                <div>
                    <Link to="./" className="sidebar-link">
                        <FaHome />
                        <span className="ml-3">Home</span>
                    </Link>
                    <Link to="./products" target="_blank"
                        className="sidebar-link">
                        <FaCouch />
                        <span className="ml-3">Products</span>
                    </Link>
                    <Link to="./about" target="_blank"
                        className="sidebar-link">
                        <FaBook />
                        <span className="ml-3">About</span>
                    </Link>
                </div>
            </article>
        </aside>
    )
}

export default SideBar
