// FormComponent.jsx
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { TextField, Button, Stack, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from "react";
import { useRef } from 'react';
import axios from "axios";
import { redirect } from "react-router-dom";



import AllertMessage from "../../components/AlertMessage/AllertMessage.jsx";


import './FormComponent2.css'


const FormComponent = () => {

  const [fotoPreview, setFotoPreview] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [ratingValue, setRatingValue] = useState(null);
  const [kategoriValue, setKategoriValue] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const [formErrors, setFormErrors] = useState({
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
  const [data, setData] = useState({
    nama_wisata: '',
    kota: '',
    provinsi: '',
    alamat: '',
    deskripsi: '',
    latitude: '',
    longtitude: '',
    kategori: '',
    rating: '',
    foto_wisata: '',
    logo_daerah: '',
  });

  const BASE_URL = "https://wisataid-api.my.id/wisata";

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoPreview(reader.result);
  
        // Update the 'foto_wisata' field in the 'data' state with the file information
        setData((prevData) => ({
          ...prevData,
          foto_wisata: file // Save the actual File object
        }));
      };
      reader.readAsDataURL(file);
      console.log(file);
    } else {
      setFotoPreview(null);
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
  
        // Update the 'foto_wisata' field in the 'data' state with the file information
        setData((prevData) => ({
          ...prevData,
          logo_daerah: file // Save the actual File object
        }));
      };
      reader.readAsDataURL(file);
      console.log(file);
    } else {
      setLogoPreview(null);
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
    ['nama_wisata', 'kota', 'provinsi', 'alamat', 'deskripsi', 'latitude', 'longitude', 'kategori', 'rating'].forEach(field => {
      if (!form.current[field].value.trim()) {
        newErrors[field] = 'This field is required';
        valid = false;
      } else {
        newErrors[field] = '';
      }
    });


    setFormErrors(newErrors);
    return valid;
  };

  const submitForm = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      return;
    }

    
  
    const formData = new FormData();
    formData.append('nama_wisata', data.nama_wisata);
    formData.append('kota', data.kota);
    formData.append('provinsi', data.provinsi);
    formData.append('alamat', data.alamat);
    formData.append('deskripsi', data.deskripsi);
    formData.append('latitude', data.latitude);
    formData.append('longtitude', data.longtitude);
    formData.append('kategori', data.kategori);
    formData.append('rating', data.rating);
    formData.append('foto_wisata', data.foto_wisata);
    formData.append('logo_daerah', data.logo_daerah);

    console.log('FormData', formData);
    console.log('Data', data);

    try {
      const response = await axios.post(BASE_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log(response);
      setOpenAlert(true);
  
      form.current.reset();
      setTimeout(() => {
        redirect("/")
      }, 4000); // 4 seconds delay
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setOpenAlert(false);
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    if (name === 'kategori') {
      // Special handling for the 'kategori' field
      setKategoriValue(value); // For Select component

      // Update the 'kategori' field in the 'data' state
      setData((prevData) => ({
        ...prevData,
        kategori: value,
      }));
    } else if (name === 'rating') {
      // Special handling for the 'rating' field
      setRatingValue(parseFloat(value)); // For Rating component
      // Update the 'rating' field in the 'data' state
      setData((prevData) => ({
        ...prevData,
        rating: parseFloat(value),
      }));
    } else {
      // Update other fields in the 'data' state
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className="form-container">
      <form ref={form} noValidate onSubmit={submitForm}>
        <Stack spacing={2} width={400} sx={{minWidth: 0}}>
          <TextField onChange={handleFormChange} value={data.nama_wisata} label='Nama Wisata' type='text' name='nama_wisata'error={!!formErrors.nama_wisata} helperText={formErrors.nama_wisata} required/>
          <Stack direction='row' spacing={2}>
            <TextField onChange={handleFormChange} value={data.kota} label='Kota' type="text" className="grid-item-textfield" name='kota' error={!!formErrors.kota} helperText={formErrors.kota} required/>
            <TextField onChange={handleFormChange} value={data.provinsi} label='Provinsi' type="text" className="grid-item-textfield" name='provinsi' error={!!formErrors.provinsi} helperText={formErrors.provinsi} required/>
          </Stack>
          <TextField onChange={handleFormChange} value={data.alamat} label='Alamat' type="text" name='alamat' error={!!formErrors.alamat} helperText={formErrors.alamat} required/>
          <TextField onChange={handleFormChange} value={data.deskripsi} label='Deskripsi' type="text" multiline rows={4} name='deskripsi' error={!!formErrors.deskripsi} helperText={formErrors.deskripsi} required/>
          <Stack direction='row' spacing={2}>
            <TextField onChange={handleFormChange} value={data.latitude} label='Latitude' type="text" className="grid-item-textfield" name='latitude' error={!!formErrors.latitude} helperText={formErrors.latitude} required/>
            <TextField onChange={handleFormChange} value={data.longitude} label='Longitude' type="text" className="grid-item-textfield"name='longitude'error={!!formErrors.longitude} helperText={formErrors.longitude} required/>
          </Stack>
          <FormControl fullWidth variant="outlined" margin="normal" className="select-field">
            <InputLabel>Kategori</InputLabel>
            <Select
              label="Kategori"
              name='kategori'
              value={kategoriValue}
              onChange={handleFormChange}
              error={!!formErrors.kategori}
              helperText={formErrors.kategori}
              required
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.name}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <InputLabel>Rating</InputLabel>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating value={ratingValue || 0} onChange={handleFormChange} size="large" name='rating' error={!!formErrors.rating} helperText={formErrors.rating} required/><Box sx={{ ml: 2 }}>{ratingValue}</Box>
          </Box>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} >
            Upload Foto
            <input
              type="file"
              onChange={handleFotoChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </Button>
              {fotoPreview && (
                <img src={fotoPreview} alt="Foto Preview" className="image-preview" />
              )}
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} >
            Upload Logo Daerah
            <input
              type="file"
              onChange={handleLogoChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </Button>
              {logoPreview && (
                <img src={logoPreview} alt="Foto Preview" className="image-preview" />
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
