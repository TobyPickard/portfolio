// Footer.js
import { AppBar, Divider, Toolbar, Typography } from '@mui/material';

export default function Footer() {
    return (
        <div>
            <AppBar position='static' color='primary'>
                <Toolbar>
                    {/* <Typography variant="body1" color="inherit">
                        © {new Date().getFullYear()} Your Website Name
                    </Typography> */}
                    <Divider />
                    <Typography style={{ fontSize: 10 }}>
                        © {new Date().getFullYear()}. Made by Toby Pickard
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
