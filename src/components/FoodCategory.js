import React, { useEffect, useState } from 'react';
import FoodItem from './FoodItem';
import firebase from '../firebase';

function FoodCategory() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const foodItemsRef = firebase.database().ref('foodItems');
    foodItemsRef.on('value', (snapshot) => {
      const foodItems = snapshot.val();
      const newState = [];
      for (let foodItem in foodItems) {
        newState.push({
          id: foodItem,
          name: foodItems[foodItem].name,
          price: foodItems[foodItem].price,
          description: foodItems[foodItem].description,
        });
      }
      setFoodItems(newState);
    });
  }, []);

  return (
    <div>
      {foodItems.map((foodItem) => (
        <FoodItem key={foodItem.id} {...foodItem} />
      ))}
    </div>
  );
}

export default FoodCategory;
