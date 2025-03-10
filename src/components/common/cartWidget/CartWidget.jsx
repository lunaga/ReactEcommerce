import { FaShoppingCart } from "react-icons/fa"
import { Badge } from "react-bootstrap"
import { useCart } from "../../../context/CartContext"
import styles from "./CartWidget.module.css"

const CartWidget = () => {
    const { getTotalQuantity } = useCart()
    const quantity = getTotalQuantity()

    return (
    <div className={styles.cartWidget}>
        <FaShoppingCart size={24} className={styles.cartIcon} />
        {quantity > 0 && (
        <Badge pill bg="danger" className={styles.badge}>
            {quantity}
        </Badge>
        )}
    </div>
    )
}

export default CartWidget
