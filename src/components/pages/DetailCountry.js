import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";
import axios from 'axios';

function DetailCountry() {
  let { alphaCode } = useParams()

  const [country, setCountry] = useState()
  const [countryBorders, setCountryBorders] = useState()

  console.log(alphaCode.toLowerCase())

  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/alpha/${alphaCode.toLowerCase()}`)
      .then(res => setCountry(res.data))
  }, [])

  return (
    <div>
      <div className="detail-country">
        <div className="container">
          <h1>{alphaCode}</h1>

        </div>
      </div>
    </div>
  )
}

export default DetailCountry
