import { Navbar, Nav, Container, Button } from "react-bootstrap"
import CartWidget from "./CartWidget"
import logo from "../assets/logo.jpg"
import styles from "./NavBar.module.css"

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className={styles.navbar}>
            <Container>
            <Navbar.Brand href="#home" className={styles.brand}>
            <img
                src={logo || "/placeholder.svg"}
                width="40"
                height="40"
                className={`d-inline-block align-top me-2 ${styles.logo}`}
                alt="PeachyPlatinums logo"
            />
            PeachyPlatinums
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Button variant="outline-light" className={`${styles.navButton} me-2`}>
                PS3
                </Button>
                <Button variant="outline-light" className={`${styles.navButton} me-2`}>
                PS4
                </Button>
                <Button variant="outline-light" className={styles.navButton}>
                PS5
                </Button>
            </Nav>
            <CartWidget />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
export default NavBar

