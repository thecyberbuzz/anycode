import React from 'react'
import Entry from './Entry'

export default function Section() {
  return (
    <>
    <section className='footer-part1'>
        <div className='left'> <p>  Uber <strong>Eats</strong></p></div>
        <div className='middle'> <Entry item1="Get Help" item2="Buy gift" item3="Add your restaurant"  item4="Sign up to deliver" item5="Create a business account" item6="Promotions"/></div>
        <div className='right'> <Entry item1="Resaturant near me" item2="View all cities" item3="View all countries" item4="Pickup near me " item5="About Uber Eats" item6="English" /></div>
    </section>
      
    </>
  )
}
