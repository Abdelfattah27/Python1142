import React, { useState } from 'react'

function NewProduct(props) {
  console.log(props)
  const product = props.x
  const [name , setName] = useState(product.name)
  const [description , setDescription] = useState(product.description)
  const [price , setPrice] = useState(product.price)
  const [countInStock , setCountInStock] = useState(product.countInStock)
  const [update , setUpdate] = useState(false)
  
  function updateRow(){
    setUpdate(!update)
  }
  return (
    <tr>
        <td> {product.id}</td>
        <td>
   {       
          update ? <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='form-control'></input> : <span>{name}</span> 
          
  }
          </td>
        <td>

    {
      update ? <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} className='form-control'></input> : <span>{description}</span>
    }

        </td>
        <td>
          {
            update ? <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} className='form-control' ></input> : <span>{price}</span>

          }
        </td>
        <td>
          {
                        update ? <input type='number' value={countInStock} onChange={(e) => setCountInStock(e.target.value)} className='form-control' ></input> : <span>{countInStock}</span>
          }
        </td>
        <td>
          <button onClick={updateRow} className='btn btn-primary'>{update ? "Save" : "Update"}</button></td>
    </tr>
  )
}

export default NewProduct