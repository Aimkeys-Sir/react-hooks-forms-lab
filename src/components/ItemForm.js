import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newItem, setItem] = useState({
    id: uuid(),
    name: "",
    category: "Produce"
  })
  function handleInput(e) {
    const tag = e.target.tagName
    const val = e.target.value
    setItem({
      ...newItem,
      id:uuid(),
      name: tag === "INPUT" ? val : newItem.name,
      category: tag === "SELECT" ? val : newItem.category
    })
  }
  function handleOnSubmit(e){
    e.preventDefault()
    onItemFormSubmit(newItem)
  }
  return (
    <form onSubmit={handleOnSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleInput} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleInput} name="category">
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
