import React, { useState } from 'react'
import fileProducts from "../data"
import TableHeading from './TableHeading'
import NewProduct from './NewProduct'

function MainComponent() {
  const [products , setProducts] = useState(fileProducts)

  function createProduct() {
     products.push({id:100})
    const updatedProducts = [...products]
    setProducts(updatedProducts)

  }

  function deleteProduct(id){
    const deletedProducts = products.filter((p) => p.id !== id )
    const updatedProducts = [...deletedProducts]
    setProducts(updatedProducts)
  }

  function updateProduct(id , data){
    const [product] = products.filter((p) => p.id === id )
    product.name = data.name
    product.description = data.description
    product.price = data.price
    product.countInStock = data.countInStock

    const updatedProducts = [...products]
    setProducts(updatedProducts)


    
  }
  return (
    <div className='container'>
      <button onClick={createProduct} className='btn'>Add</button>

<table className='table table-striped'>
    <TableHeading></TableHeading>
  <tbody>
    {
      products.map((e)=>  <NewProduct key={e.id} p={e} fnUpdate={updateProduct} fnDelete={deleteProduct} > </NewProduct>)
    }
   
    
  </tbody>
</table>

    </div>
  )
}

export default MainComponent