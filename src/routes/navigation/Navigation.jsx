import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand as={NavLink} to='/' className="ms-3">
                Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
                    <Nav.Link as={NavLink} to="/checkout">Checkout</Nav.Link>
                    <NavDropdown title={"user"}>
                        <NavDropdown.Item as={NavLink} to="/user/profile">My Profile</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/user/options">Options</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link className="me-3" as={NavLink} to="/auth">Login</Nav.Link>
                </Nav>      
            </Navbar.Collapse>
        </Navbar>
    </>
  )
}


export default Navigation