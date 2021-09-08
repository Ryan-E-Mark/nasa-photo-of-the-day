import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './Components/nasaHeader';
import Card from './Components/nasaCard';
import { API_KEY } from './constants/index'

function App() {
  const [spaceImg, setSpaceImg] = useState('');
  const [info, setInfo] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        console.log(res);
        setSpaceImg(res.data.url);
      }).catch(err => console.log(err));
  }, [])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        setInfo(res.data.explanation);
      }).catch(err => console.log(err));
  }, [])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        setTitle(res.data.title);
      }).catch(err => console.log(err));
  }, [])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        setDate(res.data.date);
      }).catch(err => console.log(err));
  }, [])

  return (
    
    <div className="App">

      <header>
      <Header />
      </header>

      <section>
      <Card spaceImg={spaceImg} title={title} info={info} date={date}/>
      </section>
      
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
