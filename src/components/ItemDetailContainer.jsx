"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Button } from "react-bootstrap"
import { getProductById } from "../services/productService"
import ItemQuantitySelector from "./ItemQuantitySelector"
import styles from "./ItemDetailContainer.module.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState(1)
    const { itemId } = useParams()

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

    const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity)
    }

    const handleAddToCart = () => {

    console.log(`Adding ${quantity} of ${product.name} to cart`)

    }

    if (loading) {
    return <div className={styles.loading}>Loading...</div>
    }

    if (!product) {
    return <div className={styles.error}>Product not found</div>
    }

    return (
    <Container className={styles.container}>
        <h2 className={styles.title}>{product.name}</h2>
        <img src={product.image || "/placeholder.svg"} alt={product.name} className={styles.image} />
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>Price: ${product.price}</p>
        <p className={styles.category}>Category: {product.category}</p>
        <ItemQuantitySelector
        initialQuantity={1}
        onQuantityChange={handleQuantityChange}
        stock={product.stock || 10} // Asumimos un stock de 10 si no está definido
        />
        <Button variant="primary" onClick={handleAddToCart} className={styles.addToCartButton}>
        Add to Cart
        </Button>
    </Container>
  )
}

export default ItemDetailContainer