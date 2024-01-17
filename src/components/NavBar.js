import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import logo from '../assets/img/result.svg';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export const NavBar = () => {

    const [activeLink, setActivateLink] = useState('home'); // Defualt value
    const [scrolled,setScrolled] =  useState(false); // Default value

    useEffect(() => {
        const onScroll = () => {
            // Just bad code. Change later
            if(window.scrollY > 120) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }

            //setScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActivateLink(value);
    }


    return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
            <Navbar.Brand href="home"> 
                <h3>C.SYLVE</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('education')}>Education</Nav.Link>
                    <Nav.Link href="#experience" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('skills')}>Personal Life</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <LinkedInIcon href="https://www.linkedin.com/in/christoffer-sylve" alt="" onClick={ () => window.open('https://www.linkedin.com/in/christoffer-sylve')} sx={{ cursor: 'pointer' }} fontSize="large"/>
                        <FacebookIcon href="https://www.facebook.com/christoffer.sylve.1/" alt=""  onClick={ () => window.open('https://www.facebook.com/christoffer.sylve.1/')} sx={{ cursor: 'pointer' }} fontSize="large"/>
                        <GitHubIcon  href="https://www.github.com/christoffersylve" alt=""  onClick={ () => window.open('https://www.github.com/christoffersylve')} sx={{ cursor: 'pointer' }} fontSize="large"/>
                    </div>
                    <button className="vvd" onClick={ () => console.log('connect') }>
                        Let's Connect
                    </button>
                </span>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

// <img scr={logo} alt="Logo"/> 
// 