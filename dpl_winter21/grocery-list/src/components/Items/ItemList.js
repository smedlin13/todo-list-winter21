import Item from './Item';
const ItemList = ({ items, listName }) => {
return (
  <>
  <h2>{listName} List</h2>

  <ul>
    <li>
  {
    items.map ( item =>
      // <li>{items.name}</li>
      <Item {...item} />
      )
  }
  </li>
  </ul>
</>
)
}


export default ItemList;