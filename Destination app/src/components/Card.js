import './main.css';
import { useState } from 'react';
// {id,img,price,place,desc}
// without braces 'props'
export default function Card(props){
    const [des,setDes] = useState(false);
    function descHandler(){
        setDes(!des);
    }
   let descr = `${props.desc.substring(0,200)}....`;
    return (
        <div className='card'>
                <div>
                    <img src={props.img} className="card-img"/>
                </div>
                <div className='card-content'>
                <div className="card-price">{props.price}</div>
                <span className="card-city">{props.place}</span>
                <p className='card-show' >
                    {des?props.desc:descr}<span className='card-desc-button' onClick={descHandler}>{des?`Show Less`:`Show More`}</span> 
                </p>
                </div>
                <button className='card-button' onClick={()=>props.removeCard(props.id)}>
                    Not Interested
                   
                </button>
        </div>
    );
}