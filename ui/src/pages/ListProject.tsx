import { Card, CardActionArea, CardContent, Chip, Grid, Typography } from "@mui/material";
import { useState  } from "react";
import ProjectDialog from "../Components/ProjectDialog"
import ProjectProps from "../Interfaces/ProjectProps";

const ListProject = () => {
  const [project, setProject] = useState<ProjectProps>({id:0, name: '', description:'', stack:'', github:'', status:''});
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const projects =[
    {id:0, name: 'Portfolio', description: 'This is a project to make a web application to personal portfolio.', stack: 'Python,React.js,AWS', github: 'https://github.com/TobyPickard/portfolio.git', status: 'Complete'},
    {id:1, name: 'proj1', description: 'This is a short description', stack: 'Java,Python,AWS', github: 'Github URL', status: 'In Progress'},
  ]

  const handleCardClick = (card: ProjectProps) => {
    setProject(card)
    setIsDialogOpen(true);
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  }

  return (
    <div style={{ backgroundColor: 'lightblue' }} id="projects">
      <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
        <h1>Projects</h1>
      </div>
      {/* Add content for the Add page */}
      <Grid container>
        {projects.map((card) => (
          <Grid item key={card.id} xs={12} >
            <div style={{ display: 'grid', placeItems: 'center', paddingBottom: '50px' }}>
              <Card sx={{ width: 1000 }}>
                <CardActionArea onClick={() => handleCardClick(card)}>
                  <CardContent>
                    <Typography key={card.id} variant="h3" component="div">
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
      <ProjectDialog project={project} open={isDialogOpen} onClose={handleCloseDialog}/>
    </div>
  );
};

export default ListProject;
