import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MealCard extends Component {
  render() {
    let { title, imageUrl, description } = this.props;
    return (
      <div className="container my-3 text-center" style={{ display: 'flex', justifyContent: 'center',backgroundColor: '#f5f5f5',maxWidth: '300px' }}>
        <div className="card" style={{backgroundColor: 'ButtonShadow',borderRadius: '10px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',overflow: 'hidden',maxWidth: '300px',}}>
          <img src={imageUrl} style={{height: '200px',width: '100%',objectFit: 'cover',}}className="card-img-top"alt="Dish" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: '#333' }}>{title}</h5> {/* Dark text for contrast */}
            <p className="card-text" style={{ color: '#555' }}>{description}...</p>
            <Link to={`${title}`} className="btn btn-dark btn-sm">View Dishes</Link>
          </div>
        </div>
      </div>
    );
  }
}
