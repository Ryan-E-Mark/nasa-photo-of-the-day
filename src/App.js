import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './Components/nasaHeader';
import Card from './Components/nasaCard';
import Footer from './Components/nasaFooter';
import { API_KEY } from './constants/index'

function App() {
  const [nasaData, setNasaData] = useState('');
  // const [info, setInfo] = useState('');
  // const [title, setTitle] = useState('');
  // const [date, setDate] = useState('');

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        // console.log(res);
        setNasaData(res.data);
        // setInfo(res.data.explanation);
        // setTitle(res.data.title);
        // setDate(res.data.date);
      }).catch(err => console.log(err));
  }, [])

  return (
    
    <div className="App">

      {nasaData === null && <p>Loading, Please Wait!</p>}

      <header>
      <Header />
      </header>

      <section>
      <Card nasaData={nasaData}/>
      </section>
      
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Footer />
    </div>
  );
}

export default App;
