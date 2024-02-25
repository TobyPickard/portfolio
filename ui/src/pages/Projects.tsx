// Projects.js
import { useState } from "react";
import AddProjectButton from "../Components/AddProjectButton";
import AddProject from "./AddProject";
import ListProject from "./ListProject";

const Projects = () => {
  let content;

  const [step, setStep] = useState("List");

  const addPage = (action) => {
    setStep(action)
  }

  switch (step) {
    case "List":
      content = <ListProject />
      break
    case "Add":
      content = <AddProject />
      break
  }
  return (
    <div>
      {content}
      {/* <AddProjectButton/> */}
    </div>
    
  );
};
export default Projects;
