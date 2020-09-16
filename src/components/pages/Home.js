import React, { useState, useEffect } from 'react';
import Filsearch from '../layout/Filsearch';
import Countries from '../layout/Countries';
import axios from 'axios';

function Home(props) {

  const [dataCountries, setDataCountries] = useState([])
  const [loading, setLoading] = useState(false)

  const { bgColor } = props

  useEffect(() => {
    setTimeout(() => setLoading(true), 0)
    setTimeout(() => {
      axios.get('https://restcountries.eu/rest/v2/all')
        .then(res => setDataCountries(res.data))
        .then(setLoading(false));
    }, 1500)
  }, []);


  const filterCountries = region => {
    axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
      .then(res => setDataCountries(res.data));
  }

  const searchCountries = keyword => {
    axios.get(`https://restcountries.eu/rest/v2/name/${keyword}?fullText=false`)
      .then(res => setDataCountries(res.data));
  }


  return (
    <>
      <div
        className="content"
        style={
          {
            backgroundColor: bgColor.background,
            color: bgColor.color
          }
        }
      >
        <Filsearch filter={filterCountries} search={searchCountries} bgColor={bgColor} />
        <Countries countries={dataCountries} bgColor={bgColor} />
      </div>
    </>
  )
}

export default Home
