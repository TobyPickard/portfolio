// App.tsx
import './App.css'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div>
        <section>
          <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/contact" element={ <Contact /> } />
              <Route path="/projects" element={ <Projects /> } />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default App
