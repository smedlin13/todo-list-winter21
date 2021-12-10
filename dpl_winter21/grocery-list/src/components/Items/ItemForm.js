import { Component } from 'react';

class ItemForm extends Component {
  state = { name: '', price: 0, purchased: false }
  
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state)
    this.setState({ name: '', price: 0, purchased: false })
  }
  render() {
    const { name, price } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name="name"
          value={name}
          onChange={this.handleChange}
          required
          placeholder="Item Name"
        />

        <input 
        name="price"
        value={price}
        onChange={this.handleChange}
        required
        placeholder="Item Price"
        />

        <button type="submit">Submit</button>

      </form>

    )
  }

}

export default ItemForm;