import { Container, Row, Col } from "react-bootstrap"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from "../constants/index";
import { motion } from "framer-motion"

export const Experience = () => {

    const ExperienceCard = ({ experience }) => {
        return (
          <VerticalTimelineElement
            contentStyle={{
              background: "#ffe4c4",
              color: "#000000",
              fontWeight: 600,
              borderRadius: "64px",
              padding: "3%",
              margin: "0%",
              boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)",
            }}
            className="experience-timeline"
            contentArrowStyle={{ borderRight: "20px solid  #faebd7" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
              <div className='experience-timeline-icon'>
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className='img'
                />
              </div>
            }
          >
            <div>
              <h3>{experience.title}</h3>
              <h5
                className='text-secondary text-[16px] font-semibold'
                style={{ margin: 0 }}
              >
                {experience.company_name}
              </h5>
            </div>
            <p>
              {experience.description}
            </p>
            <div className="language-container">
              {experience.tags.map((tag, index) => (
                <div key={`experience-point-${index}`} className="language-box">
                  <h5>{tag}</h5>
                </div>
              ))}
            </div>
          </VerticalTimelineElement>
        );
    };
    
    return (
        <div className="experience" id="experience">
            <h1>
                EXPERIENCE 
            </h1>
            <div className='boxtest'>
                <VerticalTimeline className="hello">
                {experiences.map((experience, index) => (
                    <ExperienceCard
                    key={`experience-${index}`}
                    experience={experience}
                    />
                ))}
                </VerticalTimeline>
            </div>
        </div> 
      )
}


// {experience.points.map((point, index) => (
//     <li
//       key={`experience-point-${index}`}
//       className='experience-timeline-bulletpoints'
//     >
//       {point}
//     </li>
//   ))}