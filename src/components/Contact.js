import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
//import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import emailjs from '@emailjs/browser';


export const Contact = () => {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }
      const [formDetails, setFormDetails] = useState(formInitialDetails);
      const [buttonText, setButtonText] = useState('Send');
      const [status, setStatus] = useState({});
    
      const onFormUpdate = (category, value) => {
          setFormDetails({
            ...formDetails,
            [category]: value
          })
        }
        
    const SERVICE_ID = "service_11rw1zg";
    const TEMPLATE_ID = "template_jrkcu7b";
    const PUBLIC_KEY = "ssKDTLpn0TCaKh_pi";

    // NEW FROM EMAILJS
    const form = useRef();

    const handleSubmit = (e) => {
      setFormDetails(formInitialDetails);
      sendEmail();
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact-section" id="connect">
    <section className="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>You want to...</h2>
                <h1>... explore a job oppertunity?</h1>
                <h1>... discuss programming?</h1>
                <h1>... grab a coffee?</h1>
                <h1>... play a round of golf?</h1>
                <h1>... or just get in touch? </h1>
                <h1></h1>
                <h3>Write me a message!</h3>
              </div>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_first_name" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_last_name" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="user_email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="user_mobile" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <Button variant="outlined" type="submit" value="Send" size="large" sx={{color: '#121212', border: '2px solid black', '&:hover':{border: '2px solid gray'}}} endIcon={<SendIcon />}>Send</Button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}