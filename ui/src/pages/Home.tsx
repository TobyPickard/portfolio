// Home.js

import Footer from "../Components/Footer";
import TopNavbar from "../Components/Navbar";
import About from "./About";
import Contact from "./Contact";
import ListProjects from "./ListProject";
import Hello from "./Hello";

const Home = () => {
  return (
    <div>
      <TopNavbar />
      <Hello />
      <About />
      <ListProjects />
      <Contact />
      
      {/* Add content for the Home page */}
      <Footer />
    </div>
  );
};

export default Home;
