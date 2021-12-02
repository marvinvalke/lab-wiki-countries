
import './App.css';
import { Routes, Route } from "react-router-dom";
import CountriesList from './components/CountriesList';
import allCountries from './countries.json'
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import {useState} from 'react'
function App() {
  
 const [countries , setCountries] = useState(allCountries)
 
  return (
    <div className="App">
      <Navbar />
      {
        countries.map((elem)=>{
          return <CountriesList countries={elem}/>
        })

      }
      <Routes>
        <Route path=':alpha' element={<CountryDetails data={countries}/>}/>
      </Routes>
    </div>
  );
}

export default App;
