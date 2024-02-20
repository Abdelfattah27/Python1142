import React, { useState } from 'react'

function NewProduct({ p , fnUpdate , fnDelete}) {
  const [update,  setUpdate] = useState(false)
  const [name , setName] = useState(p.name)
  const [description , setDescription] = useState(p.description)
  const [price , setPrice] = useState(p.price)
  const [countInStock , setCountInStock] = useState(p.countInStock)
  function handleUpdate() {
    if(update) {
      fnUpdate(p.id , {
        name ,
        description ,
        price , 
        countInStock
      })
    }
    setUpdate(!update)
  }
  function handleDelete() {
    fnDelete(p.id)
  }
  function handleCancel() {
    setName(p.name)
    setDescription(p.description)
    setPrice(p.price)
    setCountInStock(p.countInStock)
    setUpdate(false)
  }
  return (

      <tr>
        <td>{p.id}</td>
        <td>{ update ? <input value={name} onChange={(e)=>setName(e.target.value)} className='form-control'/> :   name}</td>
        <td>{update ?<input type='text' value={description} onChange={(e) => setDescription(e.target.value)} className='form-control'></input>  :description}</td>
        <td>{update? <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} className='form-control'></input> :price}</td>
        <td>{update? <input type='number' value={countInStock} onChange={(e) => setCountInStock(e.target.value)} className='form-control'></input> :countInStock}</td>
        <td><button onClick={handleUpdate} className='btn btn-primary'>{update ? "Save" : "Update"}</button></td>
        <td><button onClick={()=> update ? handleCancel() : handleDelete()} className='btn btn-secondary'>{update ? "Cancel" : "Delete"}</button></td>
       
{/*        
        {
          update ?<td><button onClick={handleCancel} className='btn btn-secondary'>Cancel</button></td> : <td><button onClick={handleDelete} className='btn btn-danger'>Delete</button></td>
        } */}
       
      </tr>
  )
}

export default NewProduct