import React, { useEffect, useState } from 'react'

function FunctionLifeCycle() {
    const [counter , setCounter] = useState(0)
    const [name , setName] = useState("")
    useEffect(()=> {
        console.log("hello")
        document.title = `counter = ${counter}`
     
    } )
    function handleClick() {
        setCounter(counter + 1)
    }
  return (
    <div>
        <button onClick={handleClick}>Counter = {counter}</button>
        <input onChange={(e) => setName(e.target.value)} type="text" value={name} />
    </div>
  )
}

export default FunctionLifeCycle