import Cart from './Cart'
import SideBar from './SideBar'
import SecondNav from './SecondNav'

const About = () => {
    return (
        <section>
            <SecondNav />
            <Cart />
            <SideBar />
            <section class="bg-pry-clr-5 w-full px-10 md:px-20 py-10">
                <h1 class="text-pry-clr-4 text-xl md:text-3xl tracking-wider">Home / About</h1>
            </section>

            <section id="content" class="py-20 flex flex-col items-center">
                <h1 class="text-pry-clr-0 tracking-wide text-[2rem] md:text-4xl font-semibold">
                    <span class="text-pry-clr-1">/</span> Our History
                </h1>
                <p class="text-pry-clr-4 md:text-[16px] text-sm mt-10 md:leading-[32px] leading-[28px] w-[450px] md:w-[700px]">
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