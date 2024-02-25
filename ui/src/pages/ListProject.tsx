import { Card, CardActionArea, CardContent, Chip, Grid, Typography } from "@mui/material";
import { useState  } from "react";
import ProjectDialog from "../Components/ProjectDialog"
import AddProjectButton from "../Components/AddProjectButton";

const ListProject = () => {
  const [project, setProject] = useState({id:0, description:'', stack:'', github:'', objective:'', status:''});
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const InitialProjects =[
    {id:0, name: 'Portfolio', description: 'This is a project to make a web application to personal portfolio.', stack: 'Python,React.js,AWS', github: 'https://github.com/TobyPickard/portfolio.git', status: 'Complete'},
    {id:1, name: 'proj1', description: 'This is a short description', stack: 'Java,Python,AWS', github: 'Github URL', status: 'In Progress'},
  //   {id:2, name: 'proj2', description: 'This is a short description', stack: 'Java,Python,AWS', github: 'Github URL', status: 'Complete'},
  //   {id:3, name: 'proj3', description: 'This is a short description', stack: 'Java,Python,AWS', github: 'Github URL', status: 'Complete'},
  //   {id:4, name: 'proj4', description: 'This is a short description', stack: 'Java,Python,AWS', github: 'Github URL', status: 'Complete'},
  //   {id:5, name: 'proj5', description: 'This is a short description', stack: 'Java,Python,AWS', github: 'Github URL', status: 'Complete'},
  //   {id:6, name: 'proj6', description: 'This is a short description', stack: 'Java,Python,AWS', github: 'Github URL', status: 'Complete'},
  //   {id:7, name: 'proj7', description: 'This is a short description', stack: 'Java,Python,AWS', github: 'Github URL', status: 'Complete'},
  //   {id:8, name: 'proj8', description: 'This is a short description', stack: 'Java,Python,AWS', github: 'Github URL', status: 'Complete'},
  //   {id:9, name: 'proj9', description: 'This is a short description', stack: 'Java,Python,AWS', github: 'Github URL', status: 'Complete'}
  ]

  const [projects, setProjects] = useState(InitialProjects)

  const handleCardClick = (card) => {
    setProject(card)
    setIsDialogOpen(true);
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    console.log('howdy')
  }

  const handleAddProject = () => {
    console.log(projects)
  }

  const handleDeleteProj = (projName) => {
    const newList = projects.filter((item) => item.name !== projName);
    setProjects(newList)
    handleCloseDialog()
  }

  const handleEditProj = (newProject) => {
    const newProjects = projects.map(item => {
      if (item.id === newProject.id) {
        return newProject;
      }
      return item;
    })
    setProjects(newProjects);
    handleCloseDialog()
  }

  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
        <h1>Projects</h1>
      </div>
      {/* Add content for the Add page */}
      <Grid container rowSpacing={2} columnSpacing={2}>
        {projects.map((card) => (
          <Grid item key={card.id} xs={12} >
            <div style={{ display: 'grid', placeItems: 'center', paddingBottom: '50px' }}>
              <Card sx={{ width: 1000 }}>
                <CardActionArea onClick={() => handleCardClick(card)}>
                  <CardContent>
                    <Typography id={card.id} variant="h3" component="div">
                      {card.name}
                    </Typography>
                    {card.stack.split(",").map((tech) => (
                        <Chip label={tech} />
                    ))}
                    <Typography variant="body1" color="text.secondary" noWrap>
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
      <ProjectDialog project={project} open={isDialogOpen} onClose={handleCloseDialog} deleteProj={handleDeleteProj} editProj={handleEditProj}/>
      {/* <AddProjectButton addProject={handleCloseDialog} /> */}
    </div>
  );
};

export default ListProject;
