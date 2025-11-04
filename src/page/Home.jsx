import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "../components/Slider"
import Product from "../page/Products"

function Home() {
  return (
    <>
      <Slider/>
      <Product/>
    </>
  );
} 

export default Home;
