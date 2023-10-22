 import React, { useState } from 'react'
  import "./Style.css"; 
  import Menu from "./menuApi.jsx";
  import  MenuCard from "./MenuCard.jsx";
  import Navbar from "./Navbar.jsx";
  
  const uniqueList = [
    ... new Set(Menu.map((curElem) => {
    return curElem.category;
  })
  ),
  "All",
];
  console.log(uniqueList);

const Resturent = () => {
const [menuData , setMenuData] = useState(Menu);
const [menuList, setMenuList] =  useState(uniqueList);
const filterItem= (category) =>{
  if (category === "All"){
    setMenuData(Menu);
    return;
  }
  const updatedList=Menu.filter((curElem) => {
      return curElem.category===category;
  });
  setMenuData(updatedList);
};
  return (
    <>
      <Navbar filterItem={filterItem}  menuList={menuList} />
       <MenuCard menuData={menuData} />
       
   </>
  ) 
}

export default Resturent;
