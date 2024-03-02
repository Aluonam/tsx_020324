"use client";

import React, { useEffect, useState } from 'react'

export const TableData = () => {

    type dataStorePrototype = {
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: {
            rate: number,
            count: number
            }
    }

    const [dataStore, setDataStore] = useState<dataStorePrototype>()

    useEffect(() => {

        const fetchData = async ()=>{
            try{
                const url = await fetch(`https://fakestoreapi.com/products`);
                const data = await url.json();
                console.log(data)
                setDataStore(data)
            }catch(error){console.log(error, "error detected")}
        }
        fetchData()

    }, [])


    
  return (
    <div>
        <h3>Datos:</h3>
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>title</td>
                    <td>price</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>id</td>
                    <td>title</td>
                    <td>price</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
