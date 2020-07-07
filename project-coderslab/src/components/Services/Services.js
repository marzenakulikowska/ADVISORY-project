import React from 'react';
import { NavLink} from 'react-router-dom'; 

const Services = () => {
  window.scrollTo(0, 0);
    return (
        <>
        <div className="services-container">
            <div className="main-services-page-title">
                  <h1>Usługi</h1>
            </div>
            <div className="content-container-2">
            <NavLink to="/uslugi/transport">
              <div>
                <i className="fa fa-truck fa-5x" aria-hidden="true"></i>
                <h1>Transport</h1>
              </div>
            </NavLink>
            <NavLink to="/uslugi/ksiegowosc">
              <div>
                <i className="fa fa-calculator fa-5x" aria-hidden="true"></i>
                <h1>Usługi księgowe</h1>
              </div>
            </NavLink>
            <NavLink to="/uslugi/czyszczenie">
              <div>
                <i className="fa fa-check-square-o fa-5x" aria-hidden="true"></i>
                <h1>Czyszczenie ziaren</h1>
              </div>
            </NavLink>
            </div>
        </div>
        </>
  )
}
export default Services;