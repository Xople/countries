import React, { useState, useEffect } from 'react';
import Filsearch from '../layout/Filsearch';
import Countries from '../layout/Countries';
import axios from 'axios';

function Home(props) {

  const [dataCountries, setDataCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [lengthCountries, setLengthCountries] = useState()

  const { bgColor } = props

  const test = () => {
    const getDataCountry = async (length) => {
      // const resp = await axios.get('https://restcountries.eu/rest/v2/all')
      // const newCountry = resp.data.slice(0, length).map((rd) => rd)
      // setDataCountries([...dataCountries, ...newCountry])
      setTimeout(() => {
        setLengthCountries(prevState => prevState + length)
      }, 2000)

    }
    getDataCountry(10)
  }

  useEffect(() => {
    setTimeout(() => setLoading(true), 0)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        setLengthCountries(10)
        setDataCountries(res.data)
      })
  }, []);


  const filterCountries = region => {
    setTimeout(() => setLoading(true), 0)
    setTimeout(() => {
      axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(res => {
          setLengthCountries(10)
          setDataCountries(res.data)
        })
        .then(setLoading(false))
    }, 500)
  }

  const searchCountries = keyword => {
    setTimeout(() => setLoading(true), 0)
    setTimeout(() => {
      axios.get(`https://restcountries.eu/rest/v2/name/${keyword}?fullText=false`)
        .then(res => {
          setLengthCountries(10)
          setDataCountries(res.data)
        })
        .then(setLoading(false))
    }, 500)
  }

  const preLoader = () => {
    if (loading === undefined) return

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
        <Countries countries={dataCountries} bgColor={bgColor} loading={loading} scroll={test} lengthCountries={lengthCountries} />
      </div>
    </>
  )
}

export default Home
