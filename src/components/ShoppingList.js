import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter"

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");


  return (
    <div className="ShoppingList">
    <Filter onCategoryChange={handleCategoryChange}/>