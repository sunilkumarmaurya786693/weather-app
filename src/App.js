import React ,{useState} from 'react';
import {isEmpty} from 'lodash'
import './App.css';


const App= () => {
  const [cityName,setCityName]=useState('varanasi');
  const [weatherIconId,setWeatherIconId]=useState('01n');
  const [temperature,setTemperature]=useState('300');
  const [tempType,setTempType]=useState('C');
  const [description,setDescription]=useState('haze');
  const [country,setCountry]=useState('In');
  const [windspeed ,setWindSpeed]=useState('50');
  const [visibility,setVisibility]=useState('30');
  const [humidity,setHumidity]=useState('20');
  const handleCityName=()=>{
    setCityName(document.getElementById('cityName').innerText);
    const api=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1f80bb9b36778fd0fafca50fcef0abf9`
    fetch(api).then(data=>data.json()).then((data)=>{
      if(isEmpty(data))return;
      setWeatherIconId(data.weather[0].icon);
      setTemperature(Math.floor(data.main.temp-273));
      setDescription(data.weather[0].description);
      setCountry(data.sys.country);
      setWindSpeed(Math.floor(data.wind.speed));
      setVisibility(data.visibility);
      setHumidity(data.main.humidity);

      // console.log(cityName,weatherIconId,temperature,tempType,description,country,windspeed,visibility,humidity);


    })
  }
  return(<>
    <div className="container">
    <div className="weatherData">
    <div className="weather">Weather</div>
    <div className="citynameContainer">
    <div id="cityName" onClick={()=>handleCityName()} contenteditable="true">
          {cityName}
          {/* {console.log(cityName)} */}
    </div>
    
    <div className="weatherIcon">
    
    <span><img  className="weatherIcon" src={require(`./icons/${weatherIconId}.svg`)}/></span>
    
    </div>
    <div>
      <span className="temperature">{temperature}°</span> 
      <span className="tempType">{tempType}</span>
    </div>
    <div className="description tempType">
      {description}
    </div>
    <div className="windspeed tempType ">
    <span><img  className="windSpeedIcon" src={require('./icons/wind.svg')}/></span>
      <span>{windspeed}</span>
    </div>
    {/* this is visibility */}
    {/* <div className="windspeed tempType ">
    <span><img  className="windSpeedIcon" src={require('./icons/vision.svg')}/></span>
      <span>{visibility}</span>
    </div> */}
    {/* this is humidity */}
    <div className="windspeed tempType humidity">
    <span><img  className="humidityIcon" src={require('./icons/humidity .svg')}/></span>
      <span>{humidity}</span>
    </div>
    <div className="cityCountry">
      {cityName} {country}
    </div>
    </div>
    </div>
    </div>
  </>);
}


export default App;
