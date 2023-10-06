import React from 'react'
import Entry from '../Entry'
import maps from 'C:/Users/Hp/OneDrive/Desktop/full web devleopment/ReactJs_2/React-projects/uber-eats-app/src/component/maps.png';



export default function Citiesnear() {
  return (
    <>
   
      <div className="header">
 <h2>Cities near me</h2>
 <a href="">View all 500+ cities</a>
 </div>
 <div>
  <img className='maps' src= {maps} alt=""  />
 </div>
    <div className='arrange-columns'>
    
<Entry item1="Akron" item2="Albuquerque" item3="Bridgeport" item4="Concord" item5="Dayton" item6="El Paso"/>
<Entry item1="Hartford" item2="Houston" item3="Indanapolis" item4="McAllen" item5="Mesa" item6="Milwaukee"/>
<Entry item1="Nashville" item2="New Orleans" item3="Oklahoma City" item4="Omaha" item5="Orlando" item6="Palm Bay"/>
<Entry item1="Providence" item2="Queens" item3="San Antonio" item4="Stony Brook" item5="Tucson" item6="West Hollywood"/>
</div>

    </>
  )
}
