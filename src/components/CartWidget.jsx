import { FaShoppingCart } from "react-icons/fa"
import { Badge } from "react-bootstrap"

const CartWidget = () => {
    return (
    <div className="d-flex align-items-center">
        <FaShoppingCart size={24} color="white" />
        <Badge pill bg="danger" className="ms-2">
        5
        </Badge>
    </div>
    )
}

export default CartWidget