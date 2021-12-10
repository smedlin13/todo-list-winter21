import { Component } from 'react';

class Item extends Component {
  render() {
    const { id, name, price, purchased } = this.props
    return (
      <li style={purchased ? {...styles.purchased} : null }>
        <h3>{name}</h3>
        <h3>${price}</h3>
      </li>
    )
  }
}

const styles = {
  purchased: {
    color: 'grey',
    textDecoration: 'line-through'
  }
}

export default Item;