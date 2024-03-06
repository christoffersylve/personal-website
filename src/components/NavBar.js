import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { motion } from "framer-motion"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export const NavBar = () => {

    const [activeLink, setActivateLink] = useState('home'); // Defualt value
    const [scrolled,setScrolled] =  useState(false); // Default value

    useEffect(() => {
        const onScroll = () => {setScrolled(window.scrollY > 50)}
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        console.log(value);
        setActivateLink(value);
    }

    return(
        <motion.div
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3,}}
        >
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                        <Nav.Link href="#personal" className={activeLink === 'personal' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('personal')}>About Me</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <LinkedInIcon href="https://www.linkedin.com/in/christoffer-sylve" alt="" onClick={ () => window.open('https://www.linkedin.com/in/christoffer-sylve')} sx={{ cursor: 'pointer' }} fontSize="large"/>
                            <FacebookIcon href="https://www.facebook.com/christoffer.sylve.1/" alt=""  onClick={ () => window.open('https://www.facebook.com/christoffer.sylve.1/')} sx={{ cursor: 'pointer' }} fontSize="large"/>
                            <GitHubIcon  href="https://www.github.com/christoffersylve" alt=""  onClick={ () => window.open('https://www.github.com/christoffersylve')} sx={{ cursor: 'pointer' }} fontSize="large"/>
                        </div>
                        <Nav.Link className="link-button" href="#connect" onClick={ () => onUpdateActiveLink('connect')}>Let's Connect</Nav.Link>
                    </span>
                </Navbar.Collapse>
                </Container>
            </Navbar>  
        </motion.div>
    )
}

// <button href="#connect" className="vvd" onClick={ () => onUpdateActiveLink('connect')}></button>

// <img scr={logo} alt="Logo"/> 
// 
