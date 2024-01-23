// Projects.js
import { useState } from "react";
import AddButton from "../Components/AddButton";
import AddProject from "./AddProject";
import ListProject from "./ListProject";

const Projects = () => {
  let content

  const [step, setStep] = useState(0);
  
  const nextStep = () => {
    setStep(step + 1);
  };
  const addPage = () => {
    setStep(1);
  }

  switch (step) {
    case 0:
      content = <ListProject />
      break
    case 1:
      content = <AddProject />
      break
  }
  return (
    <div>
      {content}
      <AddButton onClick={addPage}/>
    </div>
  );
};
export default Projects;
