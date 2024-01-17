import { Container, Row, Col } from "react-bootstrap";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <h3>C.SYLVE</h3>
          <Col size={12} sm={6}>
            view on github
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <LinkedInIcon href="https://www.linkedin.com/in/christoffer-sylve" alt="" onClick={ () => window.open('https://www.linkedin.com/in/christoffer-sylve')} sx={{ cursor: 'pointer' }} fontSize="large"/>
                <FacebookIcon href="https://www.facebook.com/christoffer.sylve.1/" alt=""  onClick={ () => window.open('https://www.facebook.com/christoffer.sylve.1/')} sx={{ cursor: 'pointer' }} fontSize="large"/>
                <GitHubIcon  href="https://www.github.com/christoffersylve" alt=""  onClick={ () => window.open('https://www.github.com/christoffersylve')} sx={{ cursor: 'pointer' }} fontSize="large"/>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

// <MailchimpForm />

