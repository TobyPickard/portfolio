// Contact.js
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import { FormControl, Autocomplete } from '@mui/material';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  fullname: string;
  relation: string;
  message: string;
}
const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    relation: '',
    message: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.innerText != '') {
      setFormData({
        ...formData,
        relation: e.target.innerText,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData)
  }

  const relations = [
    {relation: 'Family/Friend'},
    {relation: 'Current/Former Colleague'},
    {relation: 'Work Opportunity'}
  ]

  return (
    <div>
      <div style={{ display:'flex', justifyContent: 'center', alignItems:'center' }}>
        <h2>Get in touch...</h2>
      </div>
      <div style={{ width: '500px' }}>
        <Stack spacing={6}>
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ display:'flex', alignItems:'center' }}>
              <TextField 
                name= 'fullname' 
                label='Fullname' 
                variant='outlined' 
                style={{ marginBottom: '16px', width: '500px' }} 
                onChange={handleChange} 
              />
              <Autocomplete
                id="tags-outlined"
                options={relations}
                getOptionLabel={(option) => option.relation}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Relationship..."
                  />
                )}
                onChange={handleChange}
                style={{ marginBottom: '16px', width: '500px' }} 
              />
              <TextField 
                name= 'message' 
                label='Message' 
                variant='outlined' 
                style={{ marginBottom: '16px', width: '500px' }} 
                multiline rows={10} 
                onChange={handleChange}
              />
              <Button type='submit' variant='contained' color='primary'>Submit</Button>
            </FormControl>
          </form>
        </Stack>
      </div>

      <div style={{ display:'flex', justifyContent: 'center', alignItems:'center' }}>
        <h2>Connect With me...</h2>
      </div>
      <div style={{ display:'flex', justifyContent: 'center', alignItems:'center' }}>
        
        <IconButton  aria-label='Github' href='https://github.com/TobyPickard' target='_blank' rel='noopener noreferrer'>
          <GitHubIcon style={{fontSize: 40}} />
        </IconButton>
        <IconButton  aria-label='LinkedIn' href='https://www.linkedin.com/in/toby-pickard-84bb53175' target='_blank' rel='noopener noreferrer'>
          <LinkedInIcon style={{fontSize: 40}} />
        </IconButton>
        <IconButton  aria-label='Facebook' href='https://www.facebook.com/toby.pickard' target='_blank' rel='noopener noreferrer'>
          <FacebookIcon style={{fontSize: 40}} />
        </IconButton>
        <IconButton  aria-label='Instagram' href='https://www.instagram.com/tobypickard' target='_blank' rel='noopener noreferrer'>
          <InstagramIcon style={{fontSize: 40}} />
        </IconButton>
      </div>
    </div>
  );
};
export default Contact;
