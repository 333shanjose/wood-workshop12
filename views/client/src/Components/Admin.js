import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

import Adminnav from './Adminnav'
import axios from 'axios'
function Admin() {
  const [products,setProducts]=useState([])

  function Delete(id){
     console.log(id)
    axios.get('https://wood-workshop12-server3.vercel.app/admin/deleteproducts/'+id).then((res)=>{
      
      })
} 
  useEffect(()=>{
     axios.get('https://wood-workshop12-server3.vercel.app/admin/getp',{withCredentials:true}).then((res)=>{
        setProducts(res.data.products)
  })  
     })
  return (
    <>
    <Adminnav/>
     <div class="col-md-6 col-lg-8 mb-4 mb-md-0" style={{marginTop:"100px",marginLeft:"300px",backgroundColor:'var(--bs-card-bg)'}}>
    <div class="card">
      <div class="table-responsive text-nowrap">
        <table class="table text-nowrap">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              
            </tr>
          </thead>
          <tbody class="table-border-bottom-0">
            {products.map((p)=>{
              return (
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <img src={'images/'+p.filename} alt="" height="32" width="32" class="me-2"/>
                  <div class="d-flex flex-column">
                    <p class="text-muted">{p.names}</p>
                  </div>
                </div>
              </td>
              <td><span class="badge bg-label-primary rounded-pill badge-center p-3 me-2"></span>${p.price}</td>
              <td><Link class="btn btn-primary"  to='/admin/editproducts'  state={p._id}>edit</Link></td>   
              <td><button class="btn btn-primary" onClick={()=>Delete(p._id)} >delete</button></td>   

            </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
    </>
  )
}

export default Admin
