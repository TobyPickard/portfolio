import { Dialog, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { Autocomplete, Button, Chip, DialogActions, Divider, Grid, Typography } from "@mui/material";
import { useState  } from "react";

const ProjectDialog: React.FC<AddButtonProps> = ({ project, open, onClose, deleteProj, editProj }) => {
    const [isEditDialog, setIsEditDialog] = useState(false);
    const [newProject, setNewProject] = useState(project);

    const handleDeleteRequest = () => {
        deleteProj(project.name)
    }
    
    const handleEditRequest = () => {
        setNewProject(project);
        setIsEditDialog(true);
    }

    const handleChange = (e, values) => {
        if (values === undefined) {
            setNewProject({
                ...newProject,
                [e.target.name]: e.target.value
            })
        }
        if (values !== undefined) {
            if (values instanceof Array) {
                const stringResult = values.map((item) => {
                    const concatString = Object.values(item).join(',');
                    return concatString;
                }).join(',')
                setNewProject({
                    ...newProject,
                    stack: stringResult
                })
            } else {
                setNewProject({
                    ...newProject,
                    status: values.name
                })
            }
        }
    }

    const handleEditSubmit = () => {
        setIsEditDialog(false);
        editProj(newProject)
    }

    const handleDialogClose = () => {
        onClose();
        setIsEditDialog(false);
    }

    const statusOptions = [
        {name: 'Complete'},
        {name: 'In Progress'}
    ]

    const stackOptions = [
        {name: 'Java'},
        {name: 'Python'},
        {name: 'AWS'},
        {name: 'React'},
        {name: 'JavaScript'},
        {name: 'HTML'},
        {name: 'CSS'}
    ]

    switch (isEditDialog) {
    case true:
        return (
            <Dialog open={open} onClose={handleDialogClose} fullWidth={true}>
                <DialogTitle>
                    <TextField 
                        name='name'
                        variant='outlined'
                        fullWidth
                        onChange={handleChange}
                        defaultValue={project.name}
                        style={{ marginBottom: '16px' }} 
                    />
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <p>Stack: </p>
                        </Grid>
                        <Grid item xs={9}>
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                options={stackOptions}
                                getOptionLabel={(option) => option.name}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Tech Stack..."
                                        variant="outlined"
                                    />
                                )}
                                onChange={handleChange}
                                style={{ marginTop: '15px' }} 
                            />
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <p>Github: </p>
                        </Grid>
                        <Grid item xs={9}>
                        <TextField 
                            name='github'
                            variant='outlined'
                            fullWidth
                            onChange={handleChange}
                            defaultValue={project.github}
                            style={{ marginTop: '15px' }} 
                        />
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <p>Objective: </p>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField 
                                name='description'
                                variant='outlined'
                                fullWidth
                                multiline
                                onChange={handleChange}
                                defaultValue={project.description}
                                style={{ marginTop: '15px', marginBottom: '15px' }} 
                            />
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <p>Status: </p>
                        </Grid>
                        <Grid item xs={9}>
                            <Autocomplete
                                id="status"
                                options={statusOptions}
                                getOptionLabel={(option) => option.name}
                                renderInput={(params) => (
                                    <TextField
                                    {...params}
                                    placeholder={project.status}
                                    variant="outlined"
                                    />
                                )}
                                onChange={handleChange}
                                style={{ marginTop: '15px' }} 
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={handleDeleteRequest}>Delete</Button>
                    <Button onClick={handleEditSubmit}>Submit</Button>
                    <Button onClick={handleDialogClose}>Close</Button>
                </DialogActions>
            </Dialog>
        )
    case false:
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
                                {project.github}
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
                    <Button color="error" onClick={handleDeleteRequest}>Delete</Button>
                    <Button onClick={handleEditRequest}>Edit</Button>
                    <Button onClick={onClose}>Close</Button>
                </DialogActions>
            </ Dialog>
        );
    }
};
export default ProjectDialog;
