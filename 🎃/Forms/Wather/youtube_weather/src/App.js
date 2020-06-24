import React , {useState} from 'react';
import './App.css';
import  Titles  from './components/Titles'
import  Form  from './components/Form'
import  Weather  from './components/Weather'

const API_KEY = '0dba1eaa4b7175bcf2f7b2c6cf85f4db'

function App() {

  const [ City , setCity] = useState(null)
  const [ Country , setCountry] = useState(null)
  const [ Temp , setTemp] = useState(null)
  const [ Hum , setHum] = useState(null)
  const [ Des , setDes] = useState(null)
  const [ Icon , setIcon] = useState(null)
  const [ Err , setErr] = useState(null)

  const getWeather= async(e)=>{
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
  const data = await api_call.json();
  console.log(data)
  if(city && country){
    setCity(data.name)
    setCountry(data.sys.country)
    setTemp(data.main.temp)
    setHum(data.main.humidity)
    setDes(data.weather[0].description)
    setIcon(data.weather[0].icon)

  }  else{
    setErr("He paraszt valasz valamit ")
  }


  }
  return (
    <div className="App">
  
    <Titles />
    <Form getWeather={getWeather}/>
    <Weather City={City} 
    Country={Country} 
    Temp={Temp} 
    Hum={Hum} 
    Des={Des}
    Icon={Icon}
    Err={Err}
     />
  
    </div>
  );
}

export default App;
