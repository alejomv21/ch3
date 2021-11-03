import React, {useState, useEffect} from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbars = () => {
    const {loginWithRedirect, isAuthenticated, user, logout} = useAuth0();
    const [textButton, setTextButton] = useState('Login')
    
    useEffect(() => {
        if(isAuthenticated){
            setTextButton('Logout')
        }else{
            setTextButton('Login')
        }
    }, [isAuthenticated])

    return (
    <Navbar bg="dark" variant="dark">
    <Container>
        
    <Navbar.Brand ><img className= "logo" src="https://www.elcarrocolombiano.com/wp-content/uploads/2019/01/20190122-MPM-ERELIS-AUTO-DEPORTIVO-MAS-BARATO-01.jpg" alt="logo" /></Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link > <Link to='/'>  Home </Link> </Nav.Link>
     <Nav.Link > <Link to='/feactures'>  Features </Link> </Nav.Link>

    </Nav>
    </Container>
    {
        isAuthenticated ?
        <button
    onClick={()=>logout({ returnTo: window.location.origin })}
        className="btn btn-primary"> {textButton} </button> :
        <button
    onClick={() => loginWithRedirect()}
        className="btn btn-primary"> {textButton} </button>
    }
  </Navbar>
    )
}

export default Navbars
