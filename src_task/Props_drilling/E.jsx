import React from 'react'

function E({ name ,setName}) {
  return (
    <div>
      <button className='btn btn-primary' onClick={() => setName("Pinal nagar")}>Change from E</button>
      <h1>Hi i am E Component : {name}</h1>
    </div>
  )
}

export default E