import { Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { useState, FormEvent } from "react";

const ListProject = () => {
  const [projIndex, setIndex] = useState(0);

  const projects =[
    {id:1, name: 'proj1', content: 'this is a test'},
    {id:2, name: 'proj2', content: 'this is a test'},
    {id:3, name: 'proj3', content: 'this is a test'},
    {id:4, name: 'proj4', content: 'this is a test'},
    {id:5, name: 'proj5', content: 'this is a test'},
    {id:6, name: 'proj6', content: 'this is a test'},
    {id:7, name: 'proj7', content: 'this is a test'},
    {id:8, name: 'proj8', content: 'this is a test'},
    {id:9, name: 'proj9', content: 'this is a test'},
    {id:10, name: 'proj10', content: 'this is a test'}
  ]

  const handleCardClick = (e: FormEvent<HTMLFormElement>) => {
    setIndex(e.target.id);
  }

  switch(projIndex) {
    case 0:
      return (
        <div>
          <h1>List Page</h1>
          {/* Add content for the Add page */}
          <Grid container spacing={2}>
            {projects.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={handleCardClick}>
                    <CardContent>
                      <Typography gutterBottom id={card.id} variant="h3" component="div">
                        {card.name}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {card.content}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      );
    default:
      return (
        <div>
          <h1>{projects.id}</h1>
        </div>
      )
  }
};

export default ListProject;
