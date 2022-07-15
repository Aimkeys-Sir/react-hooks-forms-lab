import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inputData,setInputState]=useState("")

  const [itemsToDisplay,setAllItems]=useState(items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }))

  function handleOnSubmit(newItem) {
    setAllItems([...itemsToDisplay,newItem])
    console.log(newItem)
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearch(e){
    setInputState(e.target.value)
  }
  const filterLayerTwo= itemsToDisplay.filter(item=>{
    return item.name.toUpperCase().includes(inputData.toUpperCase())
  })
  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={handleOnSubmit}/>
      <Filter search={inputData} onSearchChange={handleSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {filterLayerTwo.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
