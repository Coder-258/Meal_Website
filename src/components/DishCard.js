import React from 'react'
import { Link } from 'react-router-dom';
const DishCard=(props)=>{
    let {imageUrl,title}=props;
    return (
        <div className='container my-3'  style={{ display: 'flex', justifyContent: 'center',backgroundColor: '#f5f5f5',maxWidth: '300px' }}>
        <div className="card" style={{backgroundColor: 'ButtonShadow',borderRadius: '10px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',overflow: 'hidden',maxWidth: '300px'}}>
              <img src={imageUrl} style={{height:'200px',width:'300px'}}className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {/* <p className="card-text">{description}...</p> */}
                <Link to={`${title}`} className="btn btn-dark btn-sm">View Recipe</Link>
              </div> 
        </div>
      </div>
    )
}
export default  DishCard;