/* eslint-disable no-undef */
import axios from 'axios'

export const getWisataCity = async () => {
  const city = await axios.get(`${process.env.REACT_APP_API_URL}/wisata/all/kota`)
  console.log(city)
}