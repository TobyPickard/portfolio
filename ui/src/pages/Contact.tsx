// Contact.js
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FormControl } from '@mui/material';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  fullname: string;
  email: string;
  message: string;
}
const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    message: ''
  })

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData)
  }

  return (
    <div id='contact' style={{ paddingBottom: '50px' }}>
      <div style={{ display:'flex', justifyContent: 'center', alignItems:'center' }}>
        <h2>Get in touch...</h2>
      </div>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <Stack spacing={6}>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <TextField 
                name= 'fullname' 
                label='Fullname' 
                variant='outlined' 
                style={{ marginBottom: '16px', width: '500px' }} 
                onChange={handleChange} 
              />
              <TextField
                name='email'
                label='Email'
                variant='outlined'
                style={{ marginBottom: '16px', width: '500px' }}
                onChange={handleChange}
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
    </div>
  );
};
export default Contact;
