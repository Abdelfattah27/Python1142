import React, { useState } from 'react'
import styles from "./product.module.css"

function Product({product}) {
  const [show , setShow] = useState(false)
  function toggleShow(){
    setShow(!show)
  }
  return (
    
    <tr>
    <td>{product.id}</td>
    <td>{product.name}</td>
    <td>{show ? product.description : product.description.slice(0, 20)} {show ? <span onClick={toggleShow} className={styles.show}>Show Less</span> : <span onClick={toggleShow}  className={styles.show}>Show More</span>}</td>
    <td>{product.price}</td>
    <td>{product.countInStock}</td>
</tr>
  )
}

export default Product