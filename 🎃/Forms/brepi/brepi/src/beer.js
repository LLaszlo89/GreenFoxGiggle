import React, { useState } from 'react';



 const Toggle=({beer})=>{
 console.log(beer)
  const [PicOrNot, setPicOrNot] = useState(true);

  const clicked =()=>{
    PicOrNot ? setPicOrNot(false) : setPicOrNot(true)
  }

  const answer = PicOrNot ? 
  <div key={beer.id} onClick={clicked}><img  src={ beer.image_url } alt={beer.tagline} /> <h1>{beer.name}</h1></div>
  :
  <div key={beer.id} onClick={clicked}><p>{beer.description}</p><h4>{beer.name}</h4></div>

 
  return(<div>{answer}</div>)
}

export default Toggle