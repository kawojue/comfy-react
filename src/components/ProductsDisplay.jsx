import Context from "./Context"
import { useContext, useState } from "react"

const ProductsDisplay = ({ id, name, price, image }) => {
    const { url } = image[0]
    const formatPrice = price / 100
    const [showProduct, setShowProduct] = useState(false)
    const { SlMagnifier, Link, LazyLoadImage } = useContext(Context)

    return (
        <div>
            <div className="product">
                <div className="image-container" onMouseOver={() => setShowProduct(true)}
                    onMouseOut={() => setShowProduct(false)}>
                    <LazyLoadImage src={url} alt={name} />
                    <div className="product-icon">
                        <Link to={`/product/${id}`} target="_blank"
                            className={`show-prod ${showProduct ? '' : 'hidden'}`}>
                            <SlMagnifier />
                        </Link>
                    </div>
                </div>
                <footer>
                    <p>{name}</p>
                    <span>{`$${formatPrice}`}</span>
                </footer>
            </div>
        </div>
    )
}

export default ProductsDisplay