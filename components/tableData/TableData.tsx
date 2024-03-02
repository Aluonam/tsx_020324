"use client";

import React, { useEffect, useState } from 'react'
import {ButtonMoreDetails} from './ButtonMoreDetails';

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

    const [dataStore, setDataStore] = useState<dataStorePrototype[]>()

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

    const allDataIntoTable = dataStore?.map((obj)=>{
        return(
            <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.title}</td>
                <td>{obj.price}</td>
                <td><ButtonMoreDetails description={obj.description} title={obj.title}></ButtonMoreDetails></td>
            </tr>
        )
    })

    
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
                    {allDataIntoTable}
            </tbody>
        </table>
    </div>
  )
}
