import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
export default function ViewDishHandler(){
    const {dishName}=useParams();
    return <ViewDish name={dishName}/>
}
const ViewDish=(props) =>{
  const [dishRecipes,setDishRecipes]=useState([]); 
     const fetchData= async()=>{
      let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.name}`
      let data = await fetch(url);
      let parsedData = await data.json();
      setDishRecipes(parsedData.meals);
     }
     useEffect(()=>{
      fetchData()
     })
    const renderIngredients=(element)=> {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = element[`strIngredient${i}`];
          const measure = element[`strMeasure${i}`];
          if (ingredient && ingredient.trim() !== '') {
            ingredients.push({ ingredient, measure });
          }
        }
    
        // Only display ingredients if there are any valid ones
        return ingredients.length > 0 ? (
          <div>
            <h3>Ingredients:</h3>
            <ul>
              {ingredients.map((item, index) => (
                <li key={index}>
                  {item.measure.trim()} {item.ingredient.trim()}
                </li>
              ))}
            </ul>
          </div>
        ) : null;
      }
    return (
      <div className='container text-white' style={{marginTop:'20px'}}>
        {dishRecipes && dishRecipes.length>0?(  dishRecipes.map((element)=>{
               
            return <div className="accordion" id="accordionExample" style={{marginBottom:'20px'}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <h2>{props.name}</h2>
              
              </div>
            
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button style={{fontWeight:'bolder'}}className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Ingredients
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>{renderIngredients(element)}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button style={{fontWeight:'bolder'}}className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Instructions
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p >{element.strInstructions}</p>
                </div>
              </div>
            </div>
            <p style={{fontSize:'20px'}}>Need to watch tutorial?<Link to={`${element.strYoutube}`} style={{color:'yellow'}}> Click Here</Link></p>
          </div>
          })  ):<p>No Recipe found</p>}    
      </div>
    )
  
}
