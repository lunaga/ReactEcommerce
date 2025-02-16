import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "react-bootstrap";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
    return (
    <div className={styles.cartWidget}>
        <FaShoppingCart size={24} className={styles.cartIcon} />
        <Badge pill bg="danger" className={styles.badge}>
        5
            </Badge>
    </div>
    );
};

export default CartWidget;
