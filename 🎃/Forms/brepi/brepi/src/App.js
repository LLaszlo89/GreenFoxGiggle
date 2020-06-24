import React, { useState, useEffect } from 'react';
import './App.css';
import Btn from './button';
import Toggle from './beer'

import { Pagination  } from 'antd';
import 'antd/dist/antd.css'

function App() {
const [Data, setData] = useState([]);
const [CurrentPage, setCurrentPage] = useState(2);
 
const getData= async()=>{
  const api_call = await fetch(`https://api.punkapi.com/v2/beers?page=${CurrentPage}&per_page=6`)
  const data = await api_call.json();
 setData(data)
}

 

useEffect(()=>{
  getData()
}, [ CurrentPage ])

const currentPageToChange =(num)=>{

setCurrentPage(num )

}


let newCalls = Data.map((e)=>{

 return <Toggle beer={e} key={e.id} />
 
})

  return (
    <div>
    <div className='container'>{newCalls}</div>
{    <Btn onChange={currentPageToChange} currentPageToChange={currentPageToChange} />
 }    </div>
  )

    
}
export default App
