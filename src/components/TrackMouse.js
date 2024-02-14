import React, { useEffect, useState } from 'react'
function TrackMouse() {
    const [x , setX ] = useState(0)
    const [y , setY ] = useState(0)
    const changeCoordinates = (e) => {
        setX(e.clientX)
        setY(e.clientY)
        
    }
    useEffect(()=>{
        console.log("Hello")
        window.addEventListener("mousemove" , changeCoordinates)

        return ()=>{
            console.log("component Unmounted")
            window.removeEventListener("mousemove" , changeCoordinates)
        }
    } , [])
  return (
    <div>
        x = {x}
        <br></br>
        y = {y}
    </div>
  )
}

export default TrackMouse