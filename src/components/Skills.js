import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { frameworkIconUrls, languageIconUrls, softwareIconUrls } from "../constants/index";
import { motion } from "framer-motion"


export const Skills = () => {
  return (
    <div className="skills-section" id="skills">
    <section className="skills" >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h1>TECHNICAL SKILLS</h1>
                <h2>A collection of technical skills I have had the privilage to have worked with</h2>
                <p>proficient in all and above</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="second">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Frameworks</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Programming Languages</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Software</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        <div className="grid">
                            <Row>
                                {frameworkIconUrls.map( (url,index) => (
                                  <motion.img
                                    key={`experience-${index}`} 
                                    src={url} 
                                    style={{height:100, width:100}}
                                    whileHover={{ scale: 1.2 }}                            
                                  />
                                ))}   
                            </Row>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <div className="grid">
                            <Row className="row">   
                              {languageIconUrls.map( (url,index)=> (
                                    <motion.img 
                                      key={`experience-${index}`}
                                      src={url} 
                                      style={{height:100, width:100}}
                                      whileHover={{ scale: 1.2 }}
                                    />
                              ))}       
                            </Row>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <div className="grid">    
                            <Row>
                                {softwareIconUrls.map( (url,index) => (
                                  <motion.img 
                                    key={`experience-${index}`}
                                    src={url} 
                                    style={{height:100, width:100}}
                                    whileHover={{ scale: 1.2 }}
                                  />
                                ))}
                            </Row>                   
                        </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}
