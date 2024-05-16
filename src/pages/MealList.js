// MealList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./meal-list.css"; // Import CSS file

const MealList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/meals");
      const data = await response.json();
      setMeals(data);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/meals/${id}`, {
        method: "DELETE",
      });
      fetchMeals(); // Refresh the meal list
    } catch (error) {
      console.error("Error deleting meal:", error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Meal List</h2>
        <Link to="/add" className="btn">
          Add Meal
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Meal Name</th>
            <th>Meal Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal) => (
            <tr key={meal.id}>
              <td>{meal.name}</td>
              <td>{meal.description}</td>
              <td>
                <img
                  src={`data:image/jpeg;base64,${meal.image}`}
                  alt={meal.name}
                />
              </td>
              <td className="actions">
                <Link to={`/view/${meal.id}`}>
                  <button>view</button>
                </Link>
                <Link to={`/update/${meal.id}`}>
                  <button>update</button>
                </Link>
                <button onClick={() => handleDelete(meal.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MealList;
