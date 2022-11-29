import Context from './Context'
import { useContext } from 'react'

const CartItem = ({ id, name, url, formatPrice, quantity }) => {
    const { BiChevronDown, BiChevronUp, removeCart, handleQuantity } = useContext(Context)

    return (
        <article className="cart-item">
            <img src={url} alt={name} className="cart-img" />
            <div className="cart-info">
                <h5>{name}</h5>
                <p>${formatPrice}</p>
                <button onClick={() => removeCart(id)} className="rem-cart">
                    remove
                </button>
            </div>
            <div className="quant-container">
                <button className='incre-quant'
                    onClick={() => handleQuantity('DECREMENT', id)}>
                    <BiChevronUp />
                </button>
                <p>{quantity}</p>
                <button className='decre-quant'
                    onClick={() => handleQuantity('INCREMENT', id)}>
                    <BiChevronDown />
                </button>
            </div>
        </article>
    )
}

export default CartItem