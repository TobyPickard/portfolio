// Footer.js
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import { Divider, Grid, IconButton, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center' }}>
        <Grid container spacing={4} style={{ paddingBottom: '50px', paddingTop: '50px', paddingLeft: '30px'}}>
            <Grid item xs={6}>
                <div style={{ textAlign: 'left' }}>
                    <Typography variant="h5" style={{ paddingBottom: '20px' }}>
                        Toby Pickard
                    </Typography>
                    <Divider />
                    <Typography variant="body2" >
                        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={4}>
                <div style={{ textAlign: 'left' }}>
                    <Typography variant="h5" style={{ paddingBottom: '20px' }}>
                        Socials
                    </Typography>
                    <Divider />
                    <IconButton  aria-label='Github' href='https://github.com/TobyPickard' target='_blank' rel='noopener noreferrer'>
                        <GitHubIcon style={{fontSize: 30}} />
                    </IconButton>
                    <IconButton  aria-label='LinkedIn' href='https://www.linkedin.com/in/toby-pickard-84bb53175' target='_blank' rel='noopener noreferrer'>
                        <LinkedInIcon style={{fontSize: 30}} />
                    </IconButton>
                    <IconButton  aria-label='Facebook' href='https://www.facebook.com/toby.pickard' target='_blank' rel='noopener noreferrer'>
                        <FacebookIcon style={{fontSize: 30}} />
                    </IconButton>
                    <IconButton  aria-label='Instagram' href='https://www.instagram.com/tobypickard' target='_blank' rel='noopener noreferrer'>
                        <InstagramIcon style={{fontSize: 30}} />
                    </IconButton>
                </div>
            </Grid>
        </Grid>
        <Divider />
        <Typography style={{ paddingTop: '40px', fontSize: 10 }}>
            Copyright 2024. Made by Toby Pickard
        </Typography>
    </footer>
  );
}

export default Footer;
