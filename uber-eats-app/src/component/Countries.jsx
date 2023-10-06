import React from 'react'
import Entry from '../Entry'
export default function Countries() {
  return (
    <>
    
    <div className="header">
 <h2>Countries with Uber Eats</h2>
 <a href="">View all countries</a>
 </div>
    <div className="arrange-columns">
    <Entry  item1="Australia" item2="Belgium"  item3="Canada" item4="Chile"  item5="Costa Rica" item6="Dominian Republic" />
    <Entry  item1="Ecuador" item2="El Salvador"  item3=" France" item4="Germany"  item5="Ireland" item6="Italy" />
    <Entry  item1="Japan" item2="Mexico"  item3="Kenya" item4="Netherlands"  item5="New Zealand" item6="Potugal" />
    <Entry  item1="Spain" item2="Sweden"  item3="Switzerland" item4="United Kingdom"  item5="United States" item6="" />
    </div>
    </>
  )
}
