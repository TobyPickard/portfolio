// About.js

import { Button, Chip, Grid, Typography } from "@mui/material";

const About = () => {
  const tech = ['Java', 'Python', 'AWS', 'Git', 'ReactJS']

  const handleClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div id='about' style={{background: 'yellow', paddingBottom: '20px'}}>
      <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
        <h1>About Me</h1>
      </div>
      
      <Typography style={{ color: 'black', display:'flex', justifyContent: 'center', alignItems:'center' }}>
        Add something in here!
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography>
            Test
          </Typography>
          <Button onClick={handleClick}>Contact</Button>
        </Grid>
        <Grid item xs={6}>
          {tech.map((item) => (
            <Chip label={item} />
            )
          )}
        </Grid>
      </Grid>
      {/* Add content for the About page */}
    </div>
  );
};
  
  export default About;
  