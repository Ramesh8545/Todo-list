import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor="addItem">ADD ITEM</label>
      <input
        autoFocus
        id='addItem'
        placeholder='ADD ITEM'
        required
        type="text"
        value={
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button
        type='submit'
        aria-label='Add Item'
      >
        <FaPlus />
      </button>
    </form>

  )
}

export default AddItem