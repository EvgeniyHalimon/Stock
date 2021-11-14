import React from "react";
import {Navbar, Container, Nav, NavItem} from 'react-bootstrap';
import { Link } from "react-router-dom";


function Navigation(){
    return(
        <Navbar bg="light" variant="light">
            
            <Container>
            <Navbar.Brand href="/">Sell this aluminium</Navbar.Brand>
                <Nav className="me-auto">
                    <NavItem componentclass='span' style={{marginRight : '10px'}}>
                        <Link className="link" to="/">Charts</Link>
                    </NavItem>
                    <NavItem componentclass='span'>
                        <Link className="link" to="/companies">Directory of companies</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
} 

export default Navigation