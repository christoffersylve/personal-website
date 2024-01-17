import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Education/>
      <Experience/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
