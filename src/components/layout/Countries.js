import React from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';

function Countries(props) {

  const { countries, bgColor, loading, scroll, lengthCountries } = props

  return (
    <div
      className="countries mt-5"
      style={
        loading ? { height: '60vh', overflow: 'hidden', opacity: '0' } : { minHeight: '70vh', overflow: 'visible' }
      }
    >
      <div className="container">
        <InfiniteScroll
          initialLoad={false}
          loadMore={scroll}
          hasMore={lengthCountries === countries.length ? false : true}
          loader={(
            <div className="w-100 d-flex justify-content-center mt-5">
              <div className="wrap-loader">
                <div
                  className="loader"
                  style={{
                    border: `8px solid ${bgColor.background}`,
                    borderTop: `8px solid ${bgColor.color}`
                  }}
                ></div>
              </div>
            </div>
          )}
        >
          <div className="row wrap-countries" key={0}>
            {countries.slice(0, lengthCountries).map((c, idx, arr) => {
              return (
                <div className="col-md-3 mt-5" key={c.callingCodes}>
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
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default Countries;
