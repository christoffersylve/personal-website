import { Container, Row, Col } from "react-bootstrap"
import { Button } from '@mui/material';
import imgPB from '../assets/img/pbmono.png'
import { useEffect, useState } from "react";
import resume from '../assets/img/Christoffer_Sylve_Resumé.pdf';
import DownloadIcon from '@mui/icons-material/Download';

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState(''); 
    const [delta, setDelta] = useState(100- Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 1000; 

    const toRotate = [ "programming","studying", " working on a side project", "listening to music", "hanging out with friends :)"];

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {

        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
          setDelta(prevDelta => prevDelta/2 > 50 ?  prevDelta/2 : 30); // Increase speed. Max out ad 50. 
        }
    
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(50);
        } else {
            setDelta(40 + Math.random()*20);  
            setIndex(prevIndex => prevIndex + 1);
        }
      }


    return (

        // TODO: Make it look nicer. 
        <section className="banner" id="home">
            <Container>   
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Hi there!
                        </span>
                        <h1>
                            {'Christoffer Sylve here'}
                            <span className="wrap">
                            </span>
                        </h1>
                        <h3>
                        I´m currently {text}
                        </h3>
                        <p>Master of Science in Engineering, Computer Science and Engineering</p>
                        <Button variant="outlined" size="large" sx={{color: '#121212', border: '2px solid black', '&:hover':{border: '2px solid gray'}}} endIcon={<DownloadIcon />} href={resume} download="Resume">Download My Resume</Button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={imgPB} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}