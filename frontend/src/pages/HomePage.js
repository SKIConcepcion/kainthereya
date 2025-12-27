import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        Hello, World
      </div>
    </>
  );
}

export default HomePage;
