import PropTypes from "prop-types"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import styles from "./ProductCard.module.css"

const ProductCard = ({ product }) => {
    return (
    <Card className={styles.card}>
        <Card.Img variant="top" src={product.image || "/placeholder.svg"} className={styles.cardImage} />
        <Card.Body className="d-flex flex-column">
            <Card.Title className={styles.cardTitle}>{product.name}</Card.Title>
            <Card.Text className={styles.cardText}>{product.description}</Card.Text>
            <Link to={`/item/${product.id}`} className="mt-auto">
            <Button variant="primary" className={styles.cardButton}>
            View Details
            </Button>
            </Link>
        </Card.Body>
    </Card>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
}

export default ProductCard