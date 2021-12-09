import Todo from './Todo';
// const TodoList = () => (
//   <>

//   </>
// )

// const TodoList = ({props here}) => {
const TodoList = ({ todos, listName}) => {
  return (
    <>
      <h1>{listName} List</h1>
      <ul>
        {
          todos.map( todo =>
            // <li>{todo.title}</li>
            // <Todo id={todo.id} title={todo.title} desc={todo.desc} complete={todo.complete} />
            <Todo {...todo} />
          )
        }
      </ul>
    </>
  )
}


export default TodoList;