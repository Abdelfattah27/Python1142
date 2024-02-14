import React from 'react'

import products from "../data"
import Table from 'react-bootstrap/Table';
import Product from './Product';
import NewProduct from "./NewProduct"


function MainComponent() {
  return (
    <div className='container'>
         <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>description</th>
                <th>price</th>
                <th>Count In Stock</th>
                <th>Update</th>
                </tr>
            </thead>
        <tbody>
          {
            products.map((p) =>
            <NewProduct key={p.id} x={p}></NewProduct>
                // <tr>
                //     <td>{product.id}</td>
                //     <td>{product.name}</td>
                //     <td>{product.description}</td>
                //     <td>{product.price}</td>
                //     <td>{product.countInStock}</td>
                // </tr>
)

          }
        </tbody>
    </Table>
        
    </div>
  )
}

export default MainComponent