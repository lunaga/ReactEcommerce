"use client"

import { useState } from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"
import styles from "./ItemQuantitySelector.module.css"

const ItemQuantitySelector = ({ initialQuantity, onQuantityChange, stock }) => {
    const [quantity, setQuantity] = useState(initialQuantity)

    const handleIncrease = () => {
    if (quantity < stock) {
        const newQuantity = quantity + 1
        setQuantity(newQuantity)
        onQuantityChange(newQuantity)
    }
    }

    const handleDecrease = () => {
    if (quantity > 1) {
        const newQuantity = quantity - 1
        setQuantity(newQuantity)
        onQuantityChange(newQuantity)
    }
    }

    return (
    <div className={styles.quantitySelector}>
        <Button
        variant="outline-secondary"
        onClick={handleDecrease}
        disabled={quantity <= 1}
        className={styles.quantityButton}
        >
        -
        </Button>
        <span className={styles.quantityDisplay}>{quantity}</span>
        <Button
        variant="outline-secondary"
        onClick={handleIncrease}
        disabled={quantity >= stock}
        className={styles.quantityButton}
        >
        +
        </Button>
    </div>
    )
}

ItemQuantitySelector.propTypes = {
    initialQuantity: PropTypes.number,
    onQuantityChange: PropTypes.func.isRequired,
    stock: PropTypes.number.isRequired,
}

ItemQuantitySelector.defaultProps = {
    initialQuantity: 1,
}

export default ItemQuantitySelector