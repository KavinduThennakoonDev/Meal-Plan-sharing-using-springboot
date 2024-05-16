// ViewMeal.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ViewMeal = () => {
  const { id } = useParams(); // Extract the meal ID from the URL
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchMeal();
  }, [id]); // Fetch meal whenever the id changes

  const fetchMeal = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/meals/${id}`);
      const data = await response.json();
      setMeal(data);
    } catch (error) {
      console.error('Error fetching meal:', error);
    }
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '24px', marginBottom: '20px' }}>View Meal</h2>
      {meal ? (
        <div>
          <div className="meal-attribute">
            <label>Name:</label>
            <span>{meal.name}</span>
          </div>
          <div className="meal-attribute">
            <label>Description:</label>
            <span>{meal.description}</span>
          </div>
          <div className="meal-attribute">
            <label>Image:</label>
            {meal.image && <img src={`data:image/jpeg;base64,${meal.image}`} alt={meal.name} />}
          </div>
          <Link to="/" className="btn" style={{ position: 'absolute', bottom: '20px', right: '20px', marginBlock: '20px' }}>Back</Link>
        </div>
      ) : (
        <p>Loading meal...</p>
      )}
    </div>
  );
}

export default ViewMeal;
