import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import CartWidget from "../../common/cartWidget/CartWidget"
import styles from "./NavBar.module.css"


const logo = new URL("../../../assets/logo.jpg", import.meta.url).href

const NavBar = () => {
    return (
    <Navbar bg="dark" variant="dark" expand="lg" className={styles.navbar}>
        <Container>
            <Navbar.Brand as={Link} to="/" className={styles.brand}>
            <img
            src={logo || "/placeholder.svg"}
            width="40"
            height="40"
            className={`d-inline-block align-top me-2 ${styles.logo}`}
            alt="PeachyPlatinums logo"
            onError={(e) => {
                e.target.src = "/placeholder.svg"
            }}
            />
            PeachyPlatinums
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to="/category/ps3" className={`${styles.navButton} me-2`}>
                <Button variant="outline-light">PS3</Button>
                </Link>
                <Link to="/category/ps4" className={`${styles.navButton} me-2`}>
                <Button variant="outline-light">PS4</Button>
                </Link>
                <Link to="/category/ps5" className={styles.navButton}>
                <Button variant="outline-light">PS5</Button>
                </Link>
            </Nav>
            <Link to="/cart">
                <CartWidget />
            </Link>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar