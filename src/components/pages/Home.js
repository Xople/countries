import React, { useState, useEffect, useCallback } from 'react';
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
    setTimeout(() => setLoading(true), 0)
    setTimeout(() => {
      axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(res => setDataCountries(res.data))
        .then(setLoading(false))
    }, 500)
  }

  const searchCountries = keyword => {
    setTimeout(() => setLoading(true), 0)
    setTimeout(() => {
      axios.get(`https://restcountries.eu/rest/v2/name/${keyword}?fullText=false`)
        .then(res => setDataCountries(res.data))
        .then(setLoading(false))
    }, 500)
  }

  console.log(bgColor)

  const preLoader = () => {
    if (loading == undefined) return

    if (loading) {
      return (
        <div
          className="wrap-loading d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: bgColor.background,
            color: bgColor.colorInput
          }}
        >
          <div className="loading-section">
            <div className="loading1">
              <div
                className="circle circle-1"
                style={{
                  backgroundColor: bgColor.color
                }}
              ></div>
            </div>
            <div className="loading2">
              <div
                className="circle circle-2"
                style={{
                  backgroundColor: bgColor.bgLoad2
                }}
              ></div>
            </div>
          </div>
        </div>
      )
    }

  }


  return (
    <>
      {preLoader()}
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
        <Countries countries={dataCountries} bgColor={bgColor} loading={loading} />
      </div>
    </>
  )
}

export default Home
