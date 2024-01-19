import { Container, Row, Col } from "react-bootstrap"

import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export const EducationCard = ({ school, degree, duration, location }) => {

    return (
        <section className="educationCard">
            <div>
        
            </div>
            <div className="">
                <div className="educationCard-row">
                    <div className="educationCard-row-pair">
                        <SchoolIcon className="icon" fontSize="medium"/>
                        <h2>{school}</h2>
                    </div>
                    <div className="educationCard-row-pair">
                        <CalendarMonthIcon className="icon" fontSize="medium"/>
                        <p>{duration}</p>
                    </div>
                </div>
                <div className="educationCard-row">
                    <div className="educationCard-row-pair">
                        <ImportContactsIcon className="icon" fontSize="medium"/>
                        <h4>{degree}</h4>
                    </div>
                    <div className="educationCard-row-pair">
                        <PlaceIcon className="icon" fontSize="medium"/>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}