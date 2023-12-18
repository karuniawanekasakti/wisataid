import Stack from '@mui/material/Stack';

import FormComponent from '../../components/Form2/FormComponent2';

import './AddWisata.css';

const Addwisata = () => {
  return (
    <>
    <div className="container">
      <Stack spacing={1} className="title">
        <h1>Add Wisata</h1>
        <h5>
          Tambah rekomendasi wisata
        </h5>
      </Stack>
      <FormComponent/>
    </div>
    </>
  )
}

export default Addwisata;