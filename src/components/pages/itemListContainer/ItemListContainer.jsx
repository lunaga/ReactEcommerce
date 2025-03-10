"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import ProductCard from "../../common/productCard/ProductCard"
import ProductSkeleton from "../../common/productSkeleton/ProductSkeleton"
import { getProducts } from "../../../services/productService"
import styles from "./ItemListContainer.module.css"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProducts(categoryId)
        .then((data) => {
            setProducts(data)
            setLoading(false)
        })
        .catch((error) => {
            console.error("Error fetching products:", error)
            setLoading(false)
        })
    }, [categoryId])

    return (
        <Container className={styles.container}>
        <h2 className={styles.title}>{categoryId ? `${categoryId.toUpperCase()} Games` : "All Games"}</h2>
        <Row>
            {loading ? (

            Array.from({ length: 8 }).map((_, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <ProductSkeleton />
                </Col>
            ))
            ) : (
            products.map((product) => (
                <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={product} />
                </Col>
            ))
            )}
        </Row>
        </Container>
    )
}

export default ItemListContainer