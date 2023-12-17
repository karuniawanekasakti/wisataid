  /* eslint-disable no-unused-vars */
  // eslint-disable-next-line no-unused-vars
  import { useState } from "react";
  import Stack from '@mui/material/Stack';

  import FormComponent from '../../components/Form/FormComponent';

  import './Contribution.css'

  const Contribution = () => {

      return (
          <div className='page-container'>
            <Stack spacing={1} className="title">
              <h1>Contribution</h1>
              <h5>
                Contribute to the development of the Indonesian tourism industry by adding your favorite tourist attractions
              </h5>
            </Stack>
            <FormComponent
            />
          </div>
      )
  }

  export default Contribution;
