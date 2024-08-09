import React from 'react'
import ListItems from './ListItems';

const itemsList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItems
          item={item}
          key={item.id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default itemsList