package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demo.model.Meal;

public interface MealRepository extends MongoRepository<Meal, String> {
}
