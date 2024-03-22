import { Button, Chip, Divider, Grid, Typography } from "@mui/material";

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
        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <div style={{paddingLeft: '250px', paddingRight: '250px', paddingTop: '50px'}}>
            <Typography>
            I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming
            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
            </Typography>
            <Button onClick={handleClick}>Contact</Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{paddingLeft: '250px', paddingRight: '250px', paddingTop: '50px'}}>
            <Typography variant="h5">Skills</Typography>
            <Divider />
            {tech.map((item) => (
              <Chip label={item} />
              )
            )}
            <Typography variant="h5">Career</Typography>
            <Divider />
            <Typography variant="h5">Education</Typography>
            <Divider />
          </div>

        </Grid>
      </Grid>
      {/* Add content for the About page */}
    </div>
  );
};
  
  export default About;
  