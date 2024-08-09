import React from 'react'
import { FaTrash } from "react-icons/fa";

const ListItems = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={(item.checked) ? { textDecoration: 'line-through' } : null}>{item.item}</label>
      <FaTrash
        role="button"
        onClick={() => handleDelete(item.id)}
        tabIndex="0"
      />

    </li>
  )
}

export default ListItems