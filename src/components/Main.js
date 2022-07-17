import React from 'react'
// import linkages from "../image/linkages.jpg"

export default function Main() {
  return (
    <>
    <div className='bg-image'>
        <div className="container-fluid">
            <hr/>
            <div className="row ">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              {/* city of NUP */}
            <h2 className="text size">Lagos</h2>
            <div className="row text">  
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                {/* image */}
                <img src="../image/nigeria-flag.png" alt='flag' className='country-flag'/>
                <p>Nigeria</p>
              </div>

              {/* <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text pull-left">
                 country 
                 
              </div> */}
              </div>
                  <div className="text">
                    <p >Region: West-Africa</p> 
                  </div>
                  {/* country stats */}
                  <div class="text"> 
                    <h2>2022 population</h2>
                    <p>402988</p>
                  </div>
                  {/* more info links */}
                  <div className='position'>
                  <div className="row spacing-top text">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    
                      <h3>AREAS AND DENSITIES</h3>
                      <p>POPULATION</p>
                      <p>URBAN EXTENT</p>
                      <p>COMPOSITION OF ADDED AREA</p>
                  
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <h3>BLOCKS AND ROADS</h3>
                      <p>ROADS</p>
                      <p>HOSPITALS</p>
                      <p>SCHOOLS</p>
                    </div>
                    </div>
                  </div>
            </div>
           </div>
        </div>
  </div>
</>
)
}
