import { Container, Row, Col } from "react-bootstrap";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../App.css';
import { useEffect, useState } from "react";



export const Footer = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [visitorCount,setVisitorCount] = useState(0);

  const URL = "https://api.api-ninjas.com/v1/counter?id=counter&hit=true";

  useEffect(() => {
    if(!isLoaded) {
      setIsLoaded(true);
      fetch(URL, {
        method: "GET", 
        headers: { 'X-Api-Key': 'z2mDhJso2VClEhvrv0LqJg==TK2yhSuGYrLyve0d'},
        contentType: 'application/json',
      }).then((response) => response.json())
      .then((json) => setVisitorCount(json.value));
    }
    console.log(visitorCount);
  });

  return (
    <footer className="footer">
      <Container className="container">
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h3>C.SYLVE</h3>
            <a href="https://github.com/christoffersylve/personal-website">view source code</a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-sicon">
                <LinkedInIcon href="https://www.linkedin.com/in/christoffer-sylve" alt="" onClick={ () => window.open('https://www.linkedin.com/in/christoffer-sylve')} sx={{ cursor: 'pointer' }} fontSize="large"/>
                <FacebookIcon href="https://www.facebook.com/christoffer.sylve.1/" alt=""  onClick={ () => window.open('https://www.facebook.com/christoffer.sylve.1/')} sx={{ cursor: 'pointer' }} fontSize="large"/>
                <GitHubIcon  href="https://www.github.com/christoffersylve" alt=""  onClick={ () => window.open('https://www.github.com/christoffersylve')} sx={{ cursor: 'pointer' }} fontSize="large"/>
            </div>
            <p>Copyright 2024. Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

// <MailchimpForm />

