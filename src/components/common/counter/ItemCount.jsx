"use client"

import { useState } from "react"
import PropTypes from "prop-types"
import { Button, InputGroup, FormControl } from "react-bootstrap"
import styles from "./ItemCount.module.css"

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const handleDecrease = () => {
    if (count > 1) {
        setCount(count - 1)
    }
    }

    const handleIncrease = () => {
    if (count < stock) {
        setCount(count + 1)
    }
    }

    return (
    <div className={styles.counterContainer}>
        <InputGroup className={styles.counter}>
        <Button
            variant="outline-secondary"
            onClick={handleDecrease}
            disabled={count <= 1}
            className={styles.counterButton}
        >
            -
        </Button>
        <FormControl className={styles.counterInput} value={count} readOnly />
        <Button
            variant="outline-secondary"
            onClick={handleIncrease}
            disabled={count >= stock}
            className={styles.counterButton}
            >
            +
        </Button>
        </InputGroup>
        <Button variant="primary" onClick={() => onAdd(count)} disabled={stock <= 0} className={styles.addButton}>
        {stock > 0 ? "Agregar al carrito" : "Sin stock"}
        </Button>
    </div>
    )
}

ItemCount.propTypes = {
    initial: PropTypes.number,
    stock: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired,
    }
    
    ItemCount.defaultProps = {
    initial: 1,
    }
    
    export default ItemCount