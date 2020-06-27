import React,{useState,useEffect} from 'react';
import './App.css';
// import {Link} from 'react-router-dom'

function Item({match}) {
    useEffect(() => {
        fetchItem()
        console.log(match)
    }, [])

    const [item , setItem] = useState({
        images: {}
    })
    const url = `https://cors-anywhere.herokuapp.com/https://fortniteapi.io/items/get?id=${match.params.id}`
    const fetchItem = async () => {
        const fetchItem = await fetch (url, {
            method:"GET",
            headers:{
                'Authorization':"f9f813af-dee4363c-57634ca1-18e927c2"     
            }
        })


        const item  = await fetchItem.json()
        console.log(item.item)
        setItem(item.item)

    }
    return (
     <div >
        <h1>{item.name}</h1>
        <img src = {item.images.icon} alt = "" />
     </div>
  );
}

export default Item;

// this iis an example of dynamic routing . 
// to create dynamic routing, use Link from react-router, and wrap each item.name around a Link so that when we click the h1 tag of the item name, it will take us to the path.
// add a to prop to the Link element , and pass a path using back ticks which incorporates the item id. 