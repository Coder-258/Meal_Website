import React, { Component } from 'react';
import DishCard from './DishCard';
import { useParams } from 'react-router-dom';

export default function DishesWrapper() {
  const { category } = useParams();
  return <Dishes category={category} />;
}

class Dishes extends Component {
  constructor() {
    super();
    this.state = {
      meals: [],
    };
  }

  async componentDidMount() {
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.category}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ meals: parsedData.meals });
  }

  render() {
    const { meals } = this.state;
    const cardsPerSlide = 3; // Maximum number of cards per slide
    const slides = [];

    for (let i = 0; i < meals.length; i += cardsPerSlide) {
      slides.push(meals.slice(i, i + cardsPerSlide));
    }

    return (
      <div style={{ marginTop: '20px' }}>
        <h2 className="text-white" style={{ display: 'flex', fontWeight: 'bold', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'Pacifico, Playwrite, AU, NSW', }}>Want to eat {this.props.category} today?</h2>
        <h2 className="text-white" style={{display: 'flex',fontWeight: '10px',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',fontFamily: 'Pacifico, Playwrite, AU, NSW',}}>  Look for your today's cravings and enjoy your food!</h2>
        {meals && meals.length > 0 ? (
          <div id="carouselExample"className="carousel slide"data-bs-ride="carousel">
            <div className="carousel-inner" style={{width:'70%',alignContent:'center',marginLeft:'190px'}}>
              {slides.map((slide, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`}key={index}>
                  <div className="row">
                    {slide.map((meal) => (
                      <div className="col-md-4" style={{gap:'10px'}} key={meal.idMeal}><DishCard title={meal.strMeal}imageUrl={meal.strMealThumb}/></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev"type="button" data-bs-target="#carouselExample"data-bs-slide="prev" >
              <span className="carousel-control-prev-icon"aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next"type="button"data-bs-target="#carouselExample"data-bs-slide="next">
              <span className="carousel-control-next-icon"aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        ) : (
          <p>No dishes available for this category.</p>
        )}
      </div>
    );
  }
}
