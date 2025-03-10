"use client"

import { useState } from "react"
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useCart } from "../../../context/CartContext"
import styles from "./Checkout.module.css"

const Checkout = () => {
    const { cart, getTotalPrice, clear } = useCart()
    const navigate = useNavigate()
    const [orderComplete, setOrderComplete] = useState(false)
    const [orderId, setOrderId] = useState("")
    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        
        if (form.checkValidity() === false) {
        event.stopPropagation()
        setValidated(true)
        return
        }
        

        setOrderId(`ORD-${Date.now()}`)
        setOrderComplete(true)
        clear()
    }

    if (cart.length === 0 && !orderComplete) {
        navigate('/')
        return null
    }

    if (orderComplete) {
        return (
        <Container className={styles.checkoutContainer}>
            <div className={styles.orderCompleteContainer}>
            <Alert variant="success" className={styles.orderCompleteAlert}>
                <Alert.Heading>¡Gracias por tu compra!</Alert.Heading>
                <p>
                Tu pedido ha sido recibido y está siendo procesado. El ID de tu pedido es:
                </p>
                <p className={styles.orderId}>{orderId}</p>
            </Alert>
            <Button 
                variant="primary" 
                onClick={() => navigate('/')}
                className={styles.backToShopButton}
            >
                Volver a la tienda
            </Button>
            </div>
        </Container>
        )
    }

    return (
        <Container className={styles.checkoutContainer}>
        <h2 className={styles.title}>Finalizar Compra</h2>
        <Row>
            <Col md={8}>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className={styles.checkoutForm}>
                <h3 className={styles.sectionTitle}>Información de Contacto</h3>
                
                <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="Nombre"
                    className={styles.formControl}
                    />
                    <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu nombre.
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="Apellido"
                    className={styles.formControl}
                    />
                    <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu apellido.
                    </Form.Control.Feedback>
                </Form.Group>
                </Row>
                
                <Form.Group className="mb-3" controlId="validationCustom03">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    required
                    type="email"
                    placeholder="email@ejemplo.com"
                    className={styles.formControl}
                />
                <Form.Control.Feedback type="invalid">
                    Por favor ingresa un email válido.
                </Form.Control.Feedback>
                </Form.Group>
                
                <h3 className={styles.sectionTitle}>Información de Envío</h3>
                
                <Form.Group className="mb-3" controlId="validationCustom04">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Calle y número"
                    className={styles.formControl}
                />
                <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu dirección.
                </Form.Control.Feedback>
                </Form.Group>
                
                <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom05">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="Ciudad"
                    className={styles.formControl}
                    />
                    <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu ciudad.
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group as={Col} md="3" controlId="validationCustom06">
                    <Form.Label>País</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="País"
                    className={styles.formControl}
                    />
                    <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu país.
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group as={Col} md="3" controlId="validationCustom07">
                    <Form.Label>CP</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="Código postal"
                    className={styles.formControl}
                    />
                    <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu código postal.
                    </Form.Control.Feedback>
                </Form.Group>
                </Row>
                
                <Button className={styles.submitButton} type="submit">
                Completar Compra (${getTotalPrice().toFixed(2)})
                </Button>
            </Form>
            </Col>
            
            <Col md={4}>
            <div className={styles.orderSummary}>
                <h3 className={styles.sectionTitle}>Resumen del Pedido</h3>
                <div className={styles.orderItems}>
                {cart.map((item) => (
                    <div key={item.id} className={styles.orderItem}>
                    <div className={styles.orderItemImage}>
                        <img src={item.image || "/placeholder.svg"} alt={item.name} />
                    </div>
                    <div className={styles.orderItemDetails}>
                        <p className={styles.orderItemName}>{item.name}</p>
                        <p className={styles.orderItemPrice}>
                        ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                    </div>
                    <div className={styles.orderItemTotal}>
                        ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    </div>
                ))}
                </div>
                <div className={styles.orderTotal}>
                <span>Total:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
                </div>
            </div>
            </Col>
        </Row>
        </Container>
    )
}

export default Checkout