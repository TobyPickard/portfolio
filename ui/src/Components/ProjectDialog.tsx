import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { Button, Chip, DialogActions, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProjectDialog: React.FC<AddButtonProps> = ({ project, open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth={true}>
            <DialogTitle>
                <Typography noWrap variant="h3">
                    {project.name}
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <p>Stack: </p>
                    </Grid>
                    <Grid item xs={6}>
                        {project.stack.split(",").map((tech) => (
                            <Chip label={tech} style={{marginTop: "30px"}} />
                        ))}
                    </Grid>
                </Grid>
                <Divider />
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <p>Github: </p>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" style={{ marginTop:"30px" }}>
                            <Link to={project.github}>{project.github}</Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <p>Objective: </p>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" style={{ marginTop:"30px", marginBottom:"30px" }}>
                            {project.description}
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <p>Status: </p>
                    </Grid>
                    <Grid item xs={6}>
                        {project.status === "Complete" ? (
                            <Chip label={project.status} color="success" style={{marginTop: "30px" }}/>
                        ) : project.status === "In Progress" ? (
                            <Chip label={project.status} color="primary" style={{marginTop: "30px" }}/>
                        ) : (
                            <p>{project.status}</p>
                        )}
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </ Dialog>
    );
};
export default ProjectDialog;
