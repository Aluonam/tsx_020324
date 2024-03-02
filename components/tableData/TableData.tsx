import React, { useState } from 'react'

const TableData = () => {

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
  return (
    <div>TableData</div>
  )
}

export default TableData