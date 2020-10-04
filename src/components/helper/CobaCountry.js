import axios from 'axios';

const getCountry = async (length) => {
  let result = []

  const getData = await axios.get('https://restcountries.eu/rest/v2/all')
  const data = getData.data

  for (let i = 0; i < length; i++) {
    result.push(data[i])
  }

  return result
}

export const cobaCountry = (length) => {

  let coba = [{
    name: 'oaskoks',
    capital: 'asuu',
    region: 'dua asu'
  }, {
    id: 'popopo',
    capital: 'asuus',
    region: 'dua asus'
  }, {
    id: 'popopo',
    capital: 'asuus',
    region: 'dua asus'
  }, {
    id: 'popopo',
    capital: 'asuus',
    region: 'dua asus'
  }, {
    id: 'popopo',
    capital: 'asuus',
    region: 'dua asus'
  }, {
    id: 'popopo',
    capital: 'asuus',
    region: 'dua asus'
  }, {
    id: 'popopo',
    capital: 'asuus',
    region: 'dua asus'
  }, {
    id: 'popopo',
    capital: 'asuus',
    region: 'dua asus'
  }
  ]
  return data
}