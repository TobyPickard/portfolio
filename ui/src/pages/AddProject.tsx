// Add.js

import { Autocomplete, Button, FormControl, Stack, TextField } from "@mui/material";
import { useState, FormEvent, ChangeEvent } from "react";

const AddProject = () => {
  const [formData, setFormData] = useState<FormEvent>({
    project: '',
    github: '',
    objective: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData)
  }
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const techStack = [
    {name: 'Java'},
    {name: 'Python'},
    {name: 'AWS'},
    {name: 'React'},
    {name: 'JavaScript'},
    {name: 'HTML'},
    {name: 'CSS'}
  ]
  return (
    <div>
      <div style={{ display:'flex', justifyContent: 'center', alignItems:'center' }}>
      <h1>Add Page</h1>
      </div>
      <Stack spacing={6}>
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ display:'flex', alignItems:'center' }}>
            <TextField 
              name='project'
              label='Project Name...'
              variant='outlined'
              style={{ marginBottom: '16px', width: '500px' }} 
              onChange={handleChange}
            />
            <Autocomplete
              multiple
              id="tags-outlined"
              options={techStack}
              getOptionLabel={(option) => option.name}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Tech Stack..."
                  placeholder="Favorites"
                />
              )}
              onChange={handleChange}
              style={{ marginBottom: '16px', width: '500px' }} 
            />
            <TextField 
              name='github'
              label='GitHub URL...'
              variant='outlined'
              style={{ marginBottom: '16px', width: '500px' }} 
              onChange={handleChange}
            />
            <TextField 
              name='objective'
              label='Project Objective....'
              variant='outlined'
              style={{ marginBottom: '16px', width: '500px' }} 
              onChange={handleChange}
            />
            <Button type='submit' variant='contained' color='primary'>Submit</Button>
          </FormControl>
        </form>
      </Stack>
    </div>
  );
};

export default AddProject;
