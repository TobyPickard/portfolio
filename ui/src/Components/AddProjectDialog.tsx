import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField } from "@mui/material";

const AddProjectDialog = ({ open, onClose, addProject }) => {
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

    const handleSubmit = () => {
        addProject;
    }

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>
                <TextField 
                    name=''
                    label='Project Name'
                    variant='outlined'
                    fullWidth
                    // onChange={handleChange}
                    style={{ marginBottom: '16px'}}
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
                            // onChange={handleChange}
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
                        label='GIthub'
                        variant='outlined'
                        fullWidth
                        // onChange={handleChange}
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
                            label='Objective'
                            variant='outlined'
                            fullWidth
                            multiline
                            // onChange={handleChange}
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
                                label='Status'
                                variant="outlined"
                                />
                            )}
                            // onChange={handleChange}
                            style={{ marginTop: '15px' }} 
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddProjectDialog
