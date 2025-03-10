"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Container, Button, Row, Col } from "react-bootstrap"
import { getProductById } from "../../../services/productService"
import { useCart } from "../../../context/CartContext"
import ItemCount from "../../common/counter/ItemCount"
import styles from "./ItemDetail.module.css"

const ItemDetail = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { itemId } = useParams()
    const { addItem } = useCart()
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        getProductById(itemId)
        .then((data) => {
            setProduct(data)
            setLoading(false)
        })
        .catch((error) => {
            console.error("Error fetching product details:", error)
            setLoading(false)
        })
    }, [itemId])

    const handleAddToCart = (quantity) => {
        setQuantityAdded(quantity)
        addItem(product, quantity)
    }

    const handleFinishPurchase = () => {
        navigate("/cart")
    }

    if (loading) {
        return <div className={styles.loading}>Loading...</div>
    }

    if (!product) {
        return <div className={styles.error}>Product not found</div>
    }

    return (
        <Container className={styles.container}>
        <Row>
            <Col md={6}>
            <img src={product.image || "/placeholder.svg"} alt={product.name} className={styles.image} />
            </Col>
            <Col md={6}>
            <h2 className={styles.title}>{product.name}</h2>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.category}>Category: {product.category}</p>

            {quantityAdded > 0 ? (
                <div className={styles.buttonsContainer}>
                <Button variant="success" className={styles.checkoutButton} onClick={handleFinishPurchase}>
                    Terminar compra
                </Button>
                <Button variant="outline-secondary" className={styles.continueButton} onClick={() => navigate("/")}>
                    Seguir comprando
                </Button>
                </div>
            ) : (
                <ItemCount initial={1} stock={10} onAdd={handleAddToCart} />
            )}
            </Col>
        </Row>
        </Container>
    )
}

export default ItemDetail