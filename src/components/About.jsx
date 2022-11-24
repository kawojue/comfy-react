import Cart from './Cart'
import AltNav from './AltNav'
import SideBar from './SideBar'

const About = () => {
    return (
        <section>
            <AltNav />
            <Cart />
            <SideBar />

            <section className="nav-header md:px-20">
                <h1 className="nav-header-h1 md:text-3xl">Home / About</h1>
            </section>
            <section className="content">
                <h1 className="content-h1 md:text-4xl">
                    <span className="text-pry-clr-1">/</span> Our History
                </h1>
                <p className="content-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusantium quia commodi cumque dolore.
                    Dicta, ex assumenda harum sequi hic quis aspernatur, voluptatem recusandae veritatis vero tempore
                    consequuntur? Ut, fuga deleniti laboriosam, expedita veniam excepturi cum sunt sit odio error perspiciatis
                    minus temporibus animi reiciendis repellat molestias culpa ratione rerum aut tempore earum? Consequatur
                    neque pariatur earum excepturi modi illum at quo tempora, ad doloribus fugit sint.
                </p>
            </section>
        </section>
    )
}

export default About