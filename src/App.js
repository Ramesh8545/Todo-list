import './index'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react'
import AddItem from './AddItem';

function App() {

  const [items, setItems] = useState(
    [
      {
        id: 1,
        checked: true,
        item: "practice code"
      },
      {
        id: 2,
        checked: true,
        item: "play cricket"
      },
      {
        id: 3,
        checked: true,
        item: "play football"
      },
      {
        id: 4,
        checked: true,
        item: "chatting"
      },
      {
        id: 5,
        cheaked: true,
        item: "datting"
      }
    ]);

  const [newItem, setNewItem] = useState('')

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item }
    const listItems = { ...items, addNewItem }
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify
      (listItems))
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify
      (listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) =>
      item.id !== id)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify
      (listItems))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    console.log(newItem)
    addItem(newItem)
    setNewItem('')


  }

  return (
    <>
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        setItems={setItems}
        handleDelete={handleDelete}
      />
      <Footer
        length={items.length}
      />
    </>
  );
}

export default App;
