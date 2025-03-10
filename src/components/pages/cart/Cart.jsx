"use client"

import { Button, Container, Table, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCart } from "../../../context/CartContext"
import styles from "./Cart.module.css"
import { FaTrash } from "react-icons/fa"

const Cart = () => {
    const { cart, removeItem, clear, getTotalPrice } = useCart()

    if (cart.length === 0) {
        return (
        <Container className={styles.emptyCartContainer}>
            <Alert variant="info" className={styles.emptyCartAlert}>
            Tu carrito está vacío
            </Alert>
            <Link to="/" className={styles.continueShoppingLink}>
            <Button variant="primary" className={styles.continueShoppingButton}>
                Volver a la tienda
            </Button>
            </Link>
        </Container>
        )
    }

    return (
        <Container className={styles.cartContainer}>
        <h2 className={styles.title}>Carrito de Compras</h2>
        <Table responsive bordered hover variant="dark" className={styles.cartTable}>
            <thead>
            <tr>
                <th>Producto</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Eliminar</th>
            </tr>
            </thead>
            <tbody>
            {cart.map((item) => (
                <tr key={item.id}>
                <td>
                    <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className={styles.productImage}
                    />
                </td>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                    <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                    className={styles.removeButton}
                    >
                    <FaTrash />
                    </Button>
                </td>
                </tr>
            ))}
            </tbody>
        </Table>
        <div className={styles.cartSummary}>
            <p className={styles.totalPrice}>Total: ${getTotalPrice().toFixed(2)}</p>
            <div className={styles.cartActions}>
            <Button variant="danger" onClick={clear} className={styles.clearButton}>
                Vaciar Carrito
            </Button>
            <Link to="/checkout">
                <Button variant="success" className={styles.checkoutButton}>
                Finalizar Compra
                </Button>
            </Link>
            </div>
        </div>
        </Container>
    )
}

export default Cart