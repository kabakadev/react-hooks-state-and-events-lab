import React, { useState } from "react";

function Item({ name, category }) {
  const [add, setAdd] = useState("");

  function clickHandler() {
    if (add) {
      setAdd("");
    } else {
      setAdd("in-cart");
    }
  }
  return (
    <li className={add}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={clickHandler}>
        {add ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
