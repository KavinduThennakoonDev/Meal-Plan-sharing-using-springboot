// AddMeal.js
import React, { useState } from "react";
import "./add-meal.css"; // Import the CSS file for styling

const AddMeal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("imageFile", image);

    try {
      const response = await fetch("http://localhost:8080/api/meals", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        window.location.href = "/"; // Redirect to the meal list page after successful addition
      } else {
        console.error("Failed to add meal:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding meal:", error);
    }
  };

  return (
    <div className="container">
      <h2>Add Meal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Meal Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Meal Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Add Meal </button>
      </form>
    </div>
  );
};

export default AddMeal;
