import React, { useState } from 'react';

function Filsearch(props) {

  const [keyword, setKeyword] = useState('');

  const { bgColor } = props

  const changeKeyword = (e) => setKeyword(e.target.value);

  const search = (e) => {
    e.preventDefault()
    props.search(keyword)
  }
  return (
    <>
      <div className="filsearch">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5 search d-flex align-items-center" style={
              {
                backgroundColor: bgColor.background2,
                color: bgColor.colorInput
              }
            }>
              <div className="left pl-2 pr-3">
                <i className="fa fa-search"></i>
              </div>
              <div className="right">
                <form onSubmit={search} autoComplete="off">
                  <input type="search" id="keyword" className="pl-2" placeholder="Search for a country..." onChange={changeKeyword}
                    style={{ color: bgColor.colorInput }}
                  />
                </form>
              </div>
            </div>
            <div
              className="col-md-2 col-5 filter d-flex align-items-center justify-content-center"
              style={
                {
                  backgroundColor: bgColor.background2,
                  color: bgColor.color
                }
              }
            >
              <input type="checkbox" name="filter" id="filter" className="d-none" />
              <label htmlFor="filter" className="d-flex mt-2">
                <h6 className="m-0">Filter by Region</h6>
                <i className="fa fa-chevron-down ml-3"></i>
              </label>
              <div
                className="filter-box d-flex flex-column"
                style={
                  {
                    backgroundColor: bgColor.background2,
                    color: bgColor.color
                  }
                }
              >
                <label htmlFor="filter" onClick={props.filter.bind(this, 'africa')}>
                  <span>Africa</span>
                </label>
                <label htmlFor="filter" onClick={props.filter.bind(this, 'asia')}>
                  <span>Asia</span>
                </label>
                <label htmlFor="filter" onClick={props.filter.bind(this, 'americas')}>
                  <span>Americas</span>
                </label>
                <label htmlFor="filter" onClick={props.filter.bind(this, 'europe')}>
                  <span>Europe</span>
                </label>
                <label htmlFor="filter" onClick={props.filter.bind(this, 'oceania')}>
                  <span>Oceania</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Filsearch
