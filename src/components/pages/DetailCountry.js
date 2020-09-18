import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  useParams,
  useRouteMatch,
  Link
} from "react-router-dom";
import axios from 'axios';

function DetailCountry(props) {
  let { alphaCode } = useParams()


  const [detailCountry, setDetailCountry] = useState([])
  const [detailCountryBorders, setDetailCountryBorders] = useState([])
  const [detailCountryCurrencies, setDetailCountryCurrencies] = useState([])
  const [detailCountryLanguages, setDetailCountryLanguages] = useState([])
  const [coba, setCoba] = useState([])
  const [loading, setLoading] = useState(false)

  const { bgColor } = props

  useEffect(() => {
    setTimeout(() => setLoading(true), 0)
    axios.get(`https://restcountries.eu/rest/v2/alpha/${alphaCode.toLowerCase()}`)
      .then(res => setDetailCountry(res.data))
      .then(setTimeout(() => setLoading(false), 1500))
  }, [alphaCode])

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => setCoba(res.data))
  }, [])

  useEffect(() => {
    const { currencies, languages, borders } = detailCountry

    if (currencies === undefined || languages === undefined || borders === undefined) return

    setDetailCountryBorders(borders)
    setDetailCountryCurrencies(currencies)
    setDetailCountryLanguages(languages)

  }, [detailCountry])

  const preLoader = () => {
    if (loading) {
      return (
        <div
          className="wrap-loading d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: bgColor.background,
            color: bgColor.color
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
                  backgroundColor: bgColor.color
                }}
              ></div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      {preLoader()}
      <div
        className="detail-country"
        style={{
          backgroundColor: bgColor.background,
          color: bgColor.color
        }}
      >
        <div className="container">
          <Link to="/">
            <div
              className="back-button d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: bgColor.background2,
                color: bgColor.color
              }}
            >
              <i className="fa fa-arrow-left mr-3"></i> Back
          </div>
          </Link>

          <div className="row wrap-detail justify-content-between mt-5">
            <div className="col-md-5 left">
              <div className="img">
                <img src={detailCountry.flag} alt="" />
              </div>
            </div>
            <div className="col-md-6 right d-flex flex-column justify-content-center">
              <h4>{detailCountry.name}</h4>
              <div className="row info mt-3">
                <div className="col-md-6 col-12">
                  <div className="d-flex flex-column">
                    <span><b>Native Name: </b>{detailCountry.nativeName}</span>
                    <span><b>Population: </b>{detailCountry.population}</span>
                    <span><b>Region: </b>{detailCountry.region}</span>
                    <span><b>Sub Region: </b>{detailCountry.subregion}</span>
                    <span><b>Capital: </b>{detailCountry.capital}</span>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="d-flex flex-column">
                    <span><b>Top Level Domain: </b>{detailCountry.topLevelDomain}</span>
                    <span><b>Currencies: </b>{detailCountryCurrencies.map(cc => cc.name)}</span>
                    <span><b>Languages: </b>{detailCountryLanguages.map((cl, idx, arr) => arr.length == 1 ? cl.name : idx >= 2 ? cl.name + '.' : cl.name + ', ')}</span>
                  </div>
                </div>
              </div>
              <div className="wrap-border-countries d-flex mt-5 align-items-center">
                <span>Border Countries</span>
                <div className="border-countries">
                  {detailCountryBorders.map(cb => {
                    const nameCountryBorders = coba.find(c => c.alpha3Code == cb)
                    if (nameCountryBorders === undefined) return
                    return (
                      <Link to={`/${nameCountryBorders.alpha3Code}`}>
                        <div
                          className="country d-flex align-items-center justify-content-center"
                          style={{
                            backgroundColor: bgColor.background2,
                            color: bgColor.color
                          }}
                        >
                          {nameCountryBorders.name}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default DetailCountry
