import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name,setName] = useState('')
  const [category, selectedCategory] = useState('Produce')

  function handleFormSubmit(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: name,
      category: category,
    }
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={(e)=>selectedCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
