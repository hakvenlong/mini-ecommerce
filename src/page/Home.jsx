import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "../components/Slider"
import Shop from "../components/Products"



function Home() {
  return (
    <>
      <Slider/>
      <Shop/>
    </>
  );
} 

export default Home;
