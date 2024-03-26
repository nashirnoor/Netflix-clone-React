import './App.css';
import React from 'react';
import {action,originals,horror,romance,documentaries,trending} from './urls';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost urls={originals} title='Netflix Originals'/>
      <RowPost urls={trending} title="Trending" isSmall />
      <RowPost urls={action} title='Actions' isSmall/>
      <RowPost urls={horror} title="Horror" isSmall />
      <RowPost urls={romance} title="Romance" isSmall />
      <RowPost urls={documentaries} title="Documentary" isSmall />



    </div>
   
  );
}

export default App;
