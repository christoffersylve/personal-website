import { Container, Row, Col } from "react-bootstrap"
import { Button } from '@mui/material';
import imgPB from '../assets/img/websitePB.png'
import { useEffect, useState } from "react";
import resume from '../assets/img/Christoffer_Sylve_Resumé.pdf';
import DownloadIcon from '@mui/icons-material/Download';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export const Banner = () => {

    const [getAccessToken,setAccessToken] = useState('');
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState(''); 
    const [delta, setDelta] = useState(100- Math.random() * 100);
    const period = 1000; 
    const [qc, setQc] = useState(0);

    let count = 0;


    const toRotate = [ "programming","studying", " working on a side project", "coding up this website", "listening to music", "hanging out with friends :)", "struggling with css :("];

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
    }, [text])
    
    const tick = () => {

        let i = loopNum % toRotate.length;
        let firstDelete = true;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2 > 30 ?  prevDelta/2 : 30); // Increase speed. Max out ad 50. 
        }
    
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            firstDelete = true;
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(50);
        } else {
            setDelta(40 + Math.random()*20);  
        }
    }

    async function fetchAccessToken() {
        console.log("TEST");
        var authParameters = {
            method: 'Post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + process.env.REACT_APP_SPOTIFY_CLIENT_ID + '&client_secret' + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
         }

         console.log(authParameters);

        fetch('https://accounts.spotify.com/api/token',authParameters)
            .then(result => {
                console.log(result);
                return result.json;
            })
            .then(data => setAccessToken(data.access_token))

        console.log("My accesstoken: ");
    }

    async function getMusic () {
        let url = "";
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    function increment() {
        let temp = qc;
        temp = temp + 1;
        setQc(temp);
    }

    function reset() {
        setQc(0);
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

// Current: 7 