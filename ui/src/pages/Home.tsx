// Home.js

import Footer from "../Components/Footer";
import TopNavbar from "../Components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <TopNavbar />
      <h1 style={{ paddingTop: '50px', display:'flex', justifyContent: 'center', alignItems:'center'}}>Hello</h1>
      <About />
      <Projects />
      <Contact />
      
      {/* Add content for the Home page */}
      <Footer />
    </div>
  );
};

export default Home;
