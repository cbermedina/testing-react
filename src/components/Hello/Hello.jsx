import React, { useState } from 'react'

export default function Hello() {
  const [name,setName]= useState("");
  return (
    <div>
      <h1>Hello</h1>
      <p data-testid="text-id">This is a text</p>
      <button onClick={()=>{console.log("Clicked here");}}>Click here</button>
      <input type="text" value={name} onChange={evt=> setName(evt.target.value) } />
    </div>
  )
}
