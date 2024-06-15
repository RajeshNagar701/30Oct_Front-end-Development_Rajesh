import React, { useState, createContext } from 'react'
import B from './B'

export const DataContext = createContext();

function A() {

  const [name, setName] = useState("Raj nagar");
  return (
    <>
      <DataContext.Provider value={{name, setName}}>
        <button className='btn btn-primary' onClick={() => setName("Akash Nagar")}>Change A</button>
        <h1>Hi i am A Component : {name}</h1>
        <B />
      </DataContext.Provider>
    </>
  )
}

export default A