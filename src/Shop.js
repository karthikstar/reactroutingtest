import React,{useState,useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Shop() {
    useEffect(() => {
        fetchItems()
    }, [])

    const [items , setItems] = useState([])
    const url = "https://cors-anywhere.herokuapp.com/https://fortniteapi.io/items/upcoming?lang=en"
    const fetchItems = async () => {
        const data = await fetch (url, {
            method:"GET",
            headers:{
                'Authorization':"f9f813af-dee4363c-57634ca1-18e927c2"     
            }
        })
        const items = await data.json()

        // console.log(items.items)
        setItems(items.items)

    }
    return (
    <div >
      {
        items.map(item =>(
            <h1 key = {item.id}>
                <Link to = {`/shop/${item.id}`}>{item.name}</Link>
            </h1>
        )) 
      }
    </div>
  );
}

export default Shop;

// this iis an example of dynamic routing . 
// to create dynamic routing, use Link from react-router, and wrap each item.name around a Link so that when we click the h1 tag of the item name, it will take us to the path.
// add a to prop to the Link element , and pass a path using back ticks which incorporates the item id. 