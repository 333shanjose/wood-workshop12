import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom';

function Adminlogout() {
  const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:4002/admin/logout',{withCredentials:true}).then((res)=>{
            console.log(res)

          navigate('/admin/login')
        })
    })
  return (
    <>
    
    </>
        
        
        
  )
}

export default Adminlogout