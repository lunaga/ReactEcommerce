import { Card } from "react-bootstrap"
import styles from "./ProductSkeleton.module.css"

const ProductSkeleton = () => {
    return (
        <Card className={styles.card}>
        <div className={styles.imageLoader}></div>
        <Card.Body>
            <div className={styles.titleLoader}></div>
            <div className={styles.textLoader}></div>
            <div className={styles.buttonLoader}></div>
        </Card.Body>
    </Card>
    )
}

export default ProductSkeleton