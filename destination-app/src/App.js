import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {data} from './components/data';
import Card from './components/Card'



function App() {
  const [value,setValue] = useState(data);

  function removeCard(id){
    let newValue = value.filter((newItem)=>newItem.id !== id);
    setValue(newValue);
  }
  let ref = '';
    
if (value.length==0)
{
  ref =   <div className='empty'>
  <div className='refresh'>No Tours Left</div>
  <button className='refresh-button' onClick={reload}>Refresh</button>
  </div>;
}

  function reload(){
    setValue(data);
  }
  let item_data = value.map((items)=>{
    return(
      <Card
            id = {items.id}
           img = {items.img}
           price = {items.price}
           place = {items.place}
           desc = {items.desc}

           removeCard = {removeCard}
      />
    );
  })

  return (
    <div className="app">
    <div className='hero'>

      <h2 className='hero-heading'>Travel Card</h2>
    </div>
    <div className='content'>
    {item_data}
    </div>   
    {ref}
    </div>
  );
}

export default App;