import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Personal } from './components/Personal';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Education/>
      <Experience/>
      <Personal/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
