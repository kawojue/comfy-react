import Context from './Context'
import { useContext } from 'react'

const Cart = () => {
    const { GrClose, cartModal, setCartModal } = useContext(Context)

    return (
        <section id="sidebar-cart" className={`${cartModal ? 'show' : ''}`}>
            <aside id="sidebar-cart-center" className={`${cartModal ? 'show' : ''}`}>
                <button type="button" title="close"
                    className="close-cart"
                    onClick={() => setCartModal(false)}>
                    <GrClose />
                </button>
                <article className="cart h-full w-full">
                    <h3 className="h-3 text-center">
                        your bag
                    </h3>

                    <div className="cart-items">
                        {/* cart goes here */}
                    </div>

                    <div className="total-container md:mb-10">
                        <h3 className="h-3">
                            Total : $<span className="cart-price">0.00</span>
                        </h3>
                        <button className="hover:bg-pry-clr-2 hover:text-pry-clr-6">
                            checkout
                        </button>
                    </div>
                </article>
            </aside>
        </section>
    )
}

export default Cart