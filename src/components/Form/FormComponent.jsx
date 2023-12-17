// FormComponent.jsx
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { TextField, Button, Stack, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './FormComponent.css'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const FormComponent = () => {

  const [fotoPreview, setFotoPreview] = useState(null);
  const [ratingValue, setRatingValue] = useState(0);

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFotoPreview(null);
    }
  };

  const categories = [
    { id: 1, name: 'Pantai' },
    { id: 2, name: 'Gunung' },
    { id: 3, name: 'Taman Nasional' },
    { id: 4, name: 'Kota Bersejarah' },
    { id: 5, name: 'Wisata Kuliner' },
    // Tambahkan kategori lain sesuai kebutuhan
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5mt7m6r', 'template_8otzdpc', form.current, '9CBgxaNP-qVfjK4Ml')
      .then((result) => {
          console.log(result.text);
          console.log(form.current);

          alert('Email sent successfully!');

          // Clear the form
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="form-container">
      <form ref={form} noValidate onSubmit={sendEmail}>
        <Stack spacing={2} width={400} sx={{minWidth: 0}}>
          <TextField label='Nama Pengirim' type='text' name='sender_name'/>
          <TextField label='Email' type='email' name='sender_email'/>
          <TextField label='Nama Wisata' type='text' name='nama_wisata'/>
          <Stack direction='row' spacing={2}>
            <TextField label='Kota' type="text" className="grid-item-textfield" name='kota'/>
            <TextField label='Provinsi' type="text" className="grid-item-textfield" name='provinsi'/>
          </Stack>
          <TextField label='Alamat' type="text" name='alamat'/>
          <TextField label='Deskripsi' type="text" multiline rows={4} name='deskripsi'/>
          <Stack direction='row' spacing={2}>
            <TextField label='Latitude' type="text" className="grid-item-textfield" name='latitude'/>
            <TextField label='Longitude' type="text" className="grid-item-textfield"name='longitude'/>
          </Stack>
          <FormControl fullWidth variant="outlined" margin="normal" className="select-field">
            <InputLabel>Kategori</InputLabel>
            <Select
              label="Kategori"
              name='kategori'
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <InputLabel>Rating</InputLabel>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating value={ratingValue} onChange={(event, newValue) => setRatingValue(newValue)} size="large" name='rating'/><Box sx={{ ml: 2 }}>{ratingValue}</Box>
          </Box>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} disabled>
            Upload Foto
              <VisuallyHiddenInput type="file" onChange={handleFotoChange} name='foto'/>
          </Button>
              {fotoPreview && (
                <img src={fotoPreview} alt="Foto Preview" className="image-preview" />
              )}
          <Button type="submit" variant="contained" color="primary" className="submit-button" sx={{marginBottom: 50}}>
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  )
}

export default FormComponent;
