import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBContainer
} from 'mdb-react-ui-kit';

function HomePage() {
  const navigate = useNavigate();

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px'
  };

  return (
    <MDBNavbar light bgColor="white" className="border-0 shadow-0">
      <MDBContainer 
        style={containerStyle} 
        className="d-flex align-items-center justify-content-between"
      >
        <MDBNavbarBrand className="fs-4" style={{ cursor: 'pointer' }}>
          <div className='custom-font d-flex' style={{fontSize: '40px', letterSpacing: '-2px'}}> 
            <div style={{color: '#85CBD9'}}> Kain </div>
            <div style={{color: '#FC8585'}}> There </div>
            <div style={{color: '#FFC86D'}}> Ya </div>
          </div>
        </MDBNavbarBrand>

        <div className="d-flex align-items-center gap-4" style={{fontSize: '18px'}}>
          <a href="#" className="text-dark text-decoration-none">Home</a>
          <a href="#" className="text-dark text-decoration-none">Discover</a>
          <a href="#" className="text-dark text-decoration-none me-2">Review</a>
          <a href="#" className="fw-bold text-dark text-decoration-none">Sign in</a>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default HomePage;
