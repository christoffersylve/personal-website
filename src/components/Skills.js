import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

// Importing Icons 




export const Skills = () => {

//   const projects = [
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//   ];

  return (
    <div className="skills-section" id="skills">
    <section className="skills" >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={""}>
                <h2>TECHNICAL SKILLS</h2>
                <p>A collection of technical skills I have had the privilage to have worked with</p>
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
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg" style={{height:100, width:100}}/>    
                            </Row>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <div className="grid">
                            <Row className="row">   
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original-wordmark.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"style={{height:100, width:100}}/>          
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original-wordmark.svg"style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg"style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg"style={{height:100, width:100}}/>          
                            </Row>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <div className="grid">    
                            <Row>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" style={{height:100, width:100}}/>          
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" style={{height:100, width:100}}/>  
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg" style={{height:100, width:100}}/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" style={{height:100, width:100}}/>
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