import './App.css';
import axios from "axios";
import { useEffect, useState } from "react"
import City from './City';

function App() {

  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const url = 'https://api.openweathermap.org/data/2.5/';
    const weatherKey = "aee9368ab4b3e538bec75d39005eccf3";

    async function getWeatherApi() {
      try {
        const response = await axios.get(`${url}weather?q=${search}&appid=${weatherKey}&units=metric&lang=tr`);
        setCity(response.data);
        console.log(city);
      } catch (error) {
        console.error("", error);
      }
    }
    getWeatherApi();
  }, [search]);

  return (
    <div className="App">
      <div>
        <div className='mb-3 pt-0'>
          <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Please enter city name.' className='px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2 mt-3'/>
          <City city={city}/>
        </div>
      </div>
    </div>
  );
}

export default App;
