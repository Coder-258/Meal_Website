import React from 'react'
import {Link } from 'react-router-dom';
// import GetStarted from './GetStarted'
const Content  = ()=>{
    return (
            <div>
                <div  style={{marginTop:'100px',height: '100%',fontFamily:" Libre Baskervilleserif, Playwrite AU NSW, sans-serif",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <p className="text-center text-white fs-2 fw-semibold">Want to eat something!</p>
            <p className="text-center text-white fs-5 ">Click below to search for the meals</p>
            <Link to="/getStarted"><button type="button" className="btn btn-info">Get Started</button></Link>
            </div>
            </div>
    )
}
export default  Content;