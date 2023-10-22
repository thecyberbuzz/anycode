import React from 'react'

const MenuCard = ({menuData}) => {
    //console.log(menuData);
    
  return (
        <>
        <section className="main-card--cointainer">

            {menuData.map((curElem) => {

                const {id, name,category,image,description} = curElem;
                return(
                    <>
                    <div className="card-container" key={id}>
                   <div className="card" >
                   <div className="crad-body  ">
                       <span className="card-number card-circle subtle">{id}</span>
                       <span className="card-author subtile">{name}</span>
                       <h2 className="card-title">{name}</h2>
                       <span className="card-description subtile">{description}</span>
                       <div className="card-read">Read</div>
                   </div>
                       {<img src={image} alt="image" className="card-media"/>} 
                       <span className="card-tag  subtle">Order Now</span>
                   </div>
                  </div> 
                  </>
            )
            })}
            </section> 
            </>
            )}
            
            
export default MenuCard
