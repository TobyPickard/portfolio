import { Chip, Divider, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoCard from "../Components/InfoCard";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useState } from "react";

//============================================================================

export default function About() {
    const [open, setOpen] = useState(false);
    
    const techSkills = [
        'Java', 'Python', 'Node.js', 'Typescript', 'React.js', 'AWS', 'Git', 
        'Powershell', 'Bash', 'Linux', 'Docker',
    ];
    const softSkills = ['Agile', 'Pair Programming', 'Scrum']

    //========================================================================

    const handleTootipClose = () => {
        setOpen(false);
    }

    const handleTootipOpen = () => {
        setOpen(true);
    }

    //========================================================================

    return (
        <div 
            id='about'
            style={{ 
                paddingBottom: '20px'
            }}
        >
            <div
                style={{ 
                    display:'flex',
                    justifyContent: 'center',
                    alignItems:'center'
                }}
            >
                <Typography variant="h2" style={{ fontWeight: 'bold' }}>
                    About Me
                </Typography>
            </div>
            <div
                style={{ 
                    display:'flex',
                    justifyContent: 'center',
                    alignItems:'center'
                }}
            >
                <ClickAwayListener onClickAway={handleTootipClose}>
                    <Tooltip
                        PopperProps={{
                            disablePortal: true
                        }}
                        onClose={handleTootipClose}
                        open={open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title={
                            <Typography>
                                Here you will find more information about me, 
                                what I do, and my current skills mostly in 
                                terms of programming and technology
                            </Typography>
                        }
                    >
                        <IconButton onClick={handleTootipOpen}>
                            <InfoOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </ClickAwayListener>
            </div>
            <Grid container>
                <Grid item xs={6}>
                    <div style={{ padding: '40px' }} >
                        <Typography>
                            I'm a Frontend Focused Web Developer building and 
                            managing the Front-end of Websites and Web Applications 
                            that leads to the success of the overall product. 
                            Check out some of my work in the Projects section. 
                            I also like sharing content related to the stuff 
                            that I have learned over the years in Web Development 
                            so it can help other people of the Dev Community. 
                            Feel free to Connect or Follow me on my Linkedin and 
                            Instagram where I post useful content related to Web 
                            Development and Programming. I'm open to Job opportunities 
                            where I can contribute, learn and grow. If you have a 
                            good opportunity that matches my skills and experience 
                            then don't hesitate to contact me.
                        </Typography>
                        <div
                            style={{
                                padding: '50px',
                                display:'flex',
                                justifyContent: 'center',
                                alignItems:'center'
                            }}
                        >
                            <div>
                                <div style={{ display:'flex', justifyContent: 'center', alignItems:'center' }}>
                                    <Typography variant="h5">Socials</Typography>
                                </div>
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
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ padding: '40px' }}>
                        <Typography variant="h5">Technical Skills</Typography>
                        <Divider />
                        {techSkills.map((item) => (
                            <Chip style={{ padding: '10px' }} label={item} />
                        ))}
                        <Typography style={{ paddingTop: '20px'}} variant="h5">Soft Skills</Typography>
                        <Divider />
                        {softSkills.map((item) => (
                            <Chip style={{ padding: '10px' }} label={item} />
                        ))}
                        <Typography style={{ paddingTop: '20px'}} variant="h5">Career</Typography>
                        <Divider />
                        <InfoCard title='IBM CIC' lines={['Application Developer', '2020 - Present']}/>
                        <Typography variant="h5" style={{ paddingTop: '20px'}}>Education</Typography>
                        <Divider />
                        <InfoCard title='The University of Sheffield' lines={['1st Class', 'MEng, Mechatronic and Robotic Engineering', '2016 - 2020']} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
