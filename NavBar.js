import React from 'react'
import "./Nabar.css"


const NavBar = () => {
  return (
    <div>
        <nav>
        <div className='navbar' style={{alignItems:"center",FontSize:"200px",fontFamily:"bold",backgroundColor:"black", height:"55px",color:"white",display:'flex',justifyContent:'space-around'}}>
            <div className='logo' style={{color:"white", fontSize:"50px"}} >
             MC
                </div>
            <div className='nav' style={{display:"flex-end"}} >
                <ul style={{ display: "flex",flexDirection: "row",gap:"50px"}}>
                    <li><a style={{color:"white", fontSize:"20px"}} href='/Home'>Home</a></li> 
                    <li><a style={{color:"white" , fontSize:"20px"}} href='/Signup' target={'_blank'}>Signup</a></li>
                    <li><a style={{color:"white" , fontSize:"20px"}} href='/Profile'>Profile</a></li>
                    
                </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default NavBar