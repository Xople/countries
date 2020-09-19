import React from 'react';
import { Link } from 'react-router-dom';

function Countries(props) {

  const { countries, bgColor, loading } = props

  return (
    <div
      className="countries mt-5"
      style={
        loading ? { height: '60vh', overflow: 'hidden', opacity: '0' } : { minHeight: '70vh', overflow: 'visible' }
      }
    >
      <div className="container">
        <div className="row wrap-countries">
          {countries.map((c, idx, arr) => {
            return (
              <div className="col-md-3 mt-5" key={c.alpha3Code}>
                <Link to={c.alpha3Code}>
                  <div
                    className="card-country w-100"
                    style={
                      {
                        backgroundColor: bgColor.background2,
                        color: bgColor.color
                      }
                    }
                  >
                    <div className="img">
                      <img src={c.flag} alt="" />
                    </div>
                    <div className="info-country p-3 d-flex flex-column">
                      <h6 className="mt-3">{c.name}</h6>
                      <span className="mt-3"><b>Population</b>: {c.population}</span>
                      <span><b>Region</b> : {c.region}</span>
                      <span><b>Capital</b> : {c.capital}</span>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Countries;
