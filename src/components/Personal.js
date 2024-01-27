import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Import Icons
import SportsBarIcon from '@mui/icons-material/SportsBar';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkIcon from '@mui/icons-material/Work';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import SpeakerIcon from '@mui/icons-material/Speaker';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export const Personal = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section className="personal" id="personal">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="personal-bx wow zoomIn">
                        <h2>There is more to life than work</h2>
                        <p>Throughout my time in Lund, I've had the privilege of participating in a variety <br></br> of extracurricular activities with some truly amazing people!</p>
                        <Carousel 
                                    responsive={responsive}
                                    infinite={true} 
                                    arrows={true} 
                                    showDots={false}
                                    draggable={false}
                                    swipeable={true}
                                    className="owl-carousel owl-theme personal-slider"
                        >
                            <div className="item">
                                <SportsBarIcon sx={{ fontSize: 80 }}/> 
                                <h5>Head of Bar</h5>                                
                            </div>
                            <div className="item">
                                <SpeakerIcon sx={{ fontSize: 80 }}/> 
                                <h5>Concert Event Manager</h5>                                
                            </div>
                            <div className="item">
                                <NewspaperIcon sx={{ fontSize: 80 }}/>
                                <h5>README.md</h5>
                            </div>
                            <div className="item">
                                <LocalCafeIcon sx={{ fontSize: 80 }}/>
                                <h5>Shift Leader</h5>
                            </div>
                            <div className="item">
                                <WorkIcon sx={{ fontSize: 80 }}/>
                                <h5></h5>
                                <h5>Company Host</h5>
                            </div>
                            <div className="item">
                                <AutoAwesomeIcon sx={{ fontSize: 80 }}/>
                                <h5></h5>
                                <h5>Ball Committee</h5>
                            </div>
                        </Carousel>
                    </div>
                    <div className='personal-lower-box'>
                      <div className='hobbies'>
                          <h3>Hobbies And Projects</h3>
                          <p></p>
                      </div>
                      <div className='music'>
                          <h3>Music</h3>
                          <p></p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}