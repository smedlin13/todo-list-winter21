import React, { Component, } from 'react';
import ItemList from './components/Items/ItemList';
import ItemForm from './components/Items/ItemForm';

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Oranges", price: 1.50, purchased: true, },
      { id: 2, name: "Oat Milk", price: 3.50, purchased: false,  },
      { id: 3, name: "Bread", price: 2.00, purchased: false, },
    ]
  };

    getUniqId = () => {

      return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
  
  addItem = (incomingItem) => {
    const { items } = this.state
    // const newItem = { id: this.getUniqId(), name: incomingItem.name, price: incomingItem.price, purchased: incomingItem.purchased }
    const newItem = { id: this.getUniqId(), ...incomingItem } 
    this.setState({ items: [...items, newItem]})
  }


 render() {
  const { items } = this.state
  return (
  <>
   <h1>Grocery List</h1>
   <ItemForm addItem={this.addItem}/>
   <ItemList items={items} listName="To Buy" /> 
   </>
  )
 }
}

export default App;