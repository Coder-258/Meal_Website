import React, { Component } from 'react';
import MealCard from './CategoryCard';

export default class GetStarted extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      mealNames: [],
      individualMeal: {},
    };
  }

  async componentDidMount() {
    let data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    let parsedData = await data.json();
    this.setState({ categories: parsedData.categories });
  }

  render() {
    const { categories } = this.state;
    const cardsPerSlide = 3; // Maximum number of cards per slide
    const slides = [];

    for (let i = 0; i < categories.length; i += cardsPerSlide) {
      slides.push(categories.slice(i, i + cardsPerSlide));
    }

    return (
      <div style={{ marginTop: '20px' }}>
        <h2
          className="text-white"
          style={{
            display: 'flex',
            fontWeight: 'bold',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Pacifico, Playwrite, AU, NSW',
            fontSize: '32px',
          }}
        >
          Different Categories that we have for you
        </h2>
        <h2
          className="text-white"
          style={{
            display: 'flex',
            fontWeight: '10px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Pacifico, Playwrite, AU, NSW',
          }}
        >
          Explore our delicious meal categories!
        </h2>
        
        {categories && categories.length > 0 ? (
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner" style={{ width: '70%', marginLeft: '190px' }}>
              {slides.map((slide, index) => (
                <div
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                  key={index}
                >
                  <div className="row">
                    {slide.map((category) => (
                      <div className="col-md-4" style={{ gap: '10px' }} key={category.strCategory}>
                        <MealCard
                          title={category.strCategory}
                          imageUrl={category.strCategoryThumb}
                          description={
                            category.strCategoryDescription
                              ? category.strCategoryDescription.slice(0, 88)
                              : 'No description available.'
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    );
  }
}
