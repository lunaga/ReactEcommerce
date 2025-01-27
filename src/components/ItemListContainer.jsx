import PropTypes from "prop-types"
import { Container } from "react-bootstrap"
import styles from "./ItemListContainer.module.css"

const ItemListContainer = ({ greeting }) => {
    return (
    <Container className={styles.container}>
        <h2 className={styles.greeting}>{greeting}</h2>
    </Container>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
}

export default ItemListContainer
