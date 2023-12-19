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
import AllertMessage from "../../components/AlertMessage/AllertMessage.jsx";


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
  const [ratingValue, setRatingValue] = useState(null);
  const [kategoriValue, setKategoriValue] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const [formErrors, setFormErrors] = useState({
    sender_name: '',
    sender_email: '',
    nama_wisata: '',
    kota: '',
    provinsi: '',
    alamat: '',
    deskripsi: '',
    latitude: '',
    longitude: '',
    kategori: '',
    rating: '',
  });

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
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    // Validate required fields
    ['sender_name', 'sender_email', 'nama_wisata', 'kota', 'provinsi', 'alamat', 'deskripsi', 'latitude', 'longitude', 'kategori', 'rating'].forEach(field => {
      if (!form.current[field].value.trim()) {
        newErrors[field] = 'This field is required';
        valid = false;
      } else {
        newErrors[field] = '';
      }
    });

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.current.sender_email.value.trim() && !emailRegex.test(form.current.sender_email.value)) {
      newErrors.sender_email = 'Invalid email format';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const selectedCategory = categories.find(category => category.id === parseInt(form.current.kategori.value, 10));
    const categoryName = selectedCategory ? selectedCategory.name : '';

    // Update the 'kategori' field value in the form data
    form.current.kategori.value = categoryName;

    emailjs.sendForm('service_5mt7m6r', 'template_8otzdpc', form.current, '9CBgxaNP-qVfjK4Ml')
      .then((result) => {
        console.log(result.data);
        console.log(form.current);

        setOpenAlert(true);

        // Clear the form
        form.current.reset();
        setKategoriValue('');
        setRatingValue(0);
        setFotoPreview(null);
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleClose = () => {
    setOpenAlert(false);
}

  return (
    <div className="form-container" style={{width:'100%'}}>
      <form ref={form} noValidate onSubmit={sendEmail}>
        <Stack spacing={2} width={400} sx={{minWidth: 0}} style={{width:'100%'}}>
          <TextField label='Nama Pengirim' type='text' name='sender_name' error={!!formErrors.sender_name} helperText={formErrors.sender_name} required/>
          <TextField label='Email' type='email' name='sender_email'error={!!formErrors.sender_email} helperText={formErrors.sender_email} required/>
          <TextField label='Nama Wisata' type='text' name='nama_wisata'error={!!formErrors.nama_wisata} helperText={formErrors.nama_wisata} required/>
          <Stack direction='row' spacing={2}>
            <TextField label='Kota' type="text" className="grid-item-textfield" name='kota' error={!!formErrors.kota} helperText={formErrors.kota} required/>
            <TextField label='Provinsi' type="text" className="grid-item-textfield" name='provinsi' error={!!formErrors.provinsi} helperText={formErrors.provinsi} required/>
          </Stack>
          <TextField label='Alamat' type="text" name='alamat' error={!!formErrors.alamat} helperText={formErrors.alamat} required/>
          <TextField label='Deskripsi' type="text" multiline rows={4} name='deskripsi' error={!!formErrors.deskripsi} helperText={formErrors.deskripsi} required/>
          <Stack direction='row' spacing={2}>
            <TextField label='Latitude' type="text" className="grid-item-textfield" name='latitude' error={!!formErrors.latitude} helperText={formErrors.latitude} required/>
            <TextField label='Longitude' type="text" className="grid-item-textfield"name='longitude'error={!!formErrors.longitude} helperText={formErrors.longitude} required/>
          </Stack>
          <FormControl fullWidth variant="outlined" margin="normal" className="select-field">
            <InputLabel>Kategori</InputLabel>
            <Select
              label="Kategori"
              name='kategori'
              value={kategoriValue}
              onChange={(e) => setKategoriValue(e.target.value)}
              error={!!formErrors.kategori}
              helperText={formErrors.kategori}
              required
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
            <Rating value={ratingValue || 0} onChange={(event, newValue) => setRatingValue(newValue)} size="large" name='rating' error={!!formErrors.rating} helperText={formErrors.rating} required/><Box sx={{ ml: 2 }}>{ratingValue}</Box>
          </Box>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} disabled>
            Upload Foto
              <VisuallyHiddenInput type="file" onChange={handleFotoChange} name='foto_wisata'/>
          </Button>
              {fotoPreview && (
                <img src={fotoPreview} alt="Foto Preview" className="image-preview" />
              )}
          <Button type="submit" variant="contained" color="primary" className="submit-button" sx={{marginBottom: 50}}>
            Submit
          </Button>
          {openAlert && (
            <AllertMessage label="Data Berhasil Dikirim!" open={true} severity="success" onClose={handleClose}/>
          )}
        </Stack>
      </form>
    </div>
  )
}

export default FormComponent;
