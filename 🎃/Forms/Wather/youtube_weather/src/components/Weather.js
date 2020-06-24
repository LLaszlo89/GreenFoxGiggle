import React from "react";
const Weather =(props)=>{

  return (
    <div>
    {props.City && props.Country && <p>Location: {props.City} ,{props.Country}</p>}
    {props.Temp && <p>Temperature: {props.Temp}'C</p>}
    {props.Hum && <p> Humidity: {props.Hum}</p>}
    {props.Des && <p> Conditions: {props.Des}</p>}
    {!props.City && !props.Country && <h1>{props.Err}</h1> }
    {props.Icon && <img style={{ backgroundSize:'150%'}} src={`http://openweathermap.org/img/wn/${props.Icon}@2x.png`} alt={props.Des}
    />}
    </div>
  );
}

export default Weather;
