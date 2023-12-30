// Contact.js
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FormControl, Select, MenuItem } from '@mui/material';
import { useState, ChangeEvent, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState<FormEvent>({
    fullname: '',
    relation: '',
    message: ''
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
  return (
    <div>
      <div style={{ display:'flex', justifyContent: 'center', alignItems:'center' }}>
        <h2>Get in touch...</h2>
      </div>
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
            <Select 
              label='Relation'
              name='relation'
              onChange={handleChange}
              style={{ marginBottom: '16px', width: '500px' }}
            >
              <MenuItem value='Test'>Family/Friends</MenuItem>
              <MenuItem value='Test2'>Colleague</MenuItem>
              <MenuItem value='Test3'>Former Colleague</MenuItem>
            </Select>
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

      {/* <h2>Social media (NEED TO ADD IN ICONS WITH LINKS)</h2> */}

      

      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="https://www.linkedin.com/in/toby-pickard-84bb53175" className="fa fa-linkedin"></a>
        <a href="https://www.facebook.com/toby.pickard" className="fa fa-facebook"></a>
        <a href="https://www.instagram.com/tobypickard" className="fa fa-instagram"></a>
        <a href="https://github.com/TobyPickard" className="fa fa-github"></a>
      </div> */}
    </div>
  );
};
export default Contact;
