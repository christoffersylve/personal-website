import { Container, Row, Col } from "react-bootstrap"
import { EducationCard } from "./EducationCard"

// Icons 
import SchoolIcon from '@mui/icons-material/School';


export const Education = () => {
    
    return (
        // Note: Add margin to fix nice transitions from nav-bar
        <section className="education" id="education">
            <h1>EDUCATION</h1>
            <Container className="education-box">
                <EducationCard school="Lunds Tekniska Högskola" degree="Master of Science in Engineering, Computer Science and Engineering" duration="Aug,2021 - Jun,2026" location="Lund, Sweden"/>
                <EducationCard school="Blackebergs Gymnasium" degree="Natural Science" duration="Aug,2017 - Jun,2020" location="Stockholm, Sweden"/>
                <EducationCard school="Internationella Engelska Skolan Bromma" degree="Middle Shool" duration="Aug,2013 - Jun,2017" location="Stockholm, Sweden"/>
            </Container>
        </section>
    )
}