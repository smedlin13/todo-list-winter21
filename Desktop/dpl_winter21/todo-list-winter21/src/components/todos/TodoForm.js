import { Component } from 'react';

class TodoForm extends Component {
  state = { title: '', desc: '', complete: false }
  // is a function that will grab the user info and store it in state
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    // this.setState({ title: "learn piano" })
    // this.setState({ desc: "play tik tok piano songs" })
  }

  // what are we doing with data? when we submit the form 
  handleSubmit = (e) => {
    // prevent default of refreshing, dumpinng data, info in url 
    e.preventDefault()
    // add to the list 
    this.props.addTodo(this.state)
    // clear out form
    this.setState({ title: '', desc: '', complete: false })
  }

  render() {
    const { title, desc } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          // 3 items you need for a input, rest is optional
          // name - key of the field it is for
          // value - where is it stored
          // onChange - is a function that will grab the user info and store it in state
          name="title"
          value={title}
          onChange={this.handleChange}
          // optional
          required 
          placeholder="Todo title"
        />
        <input
          name="desc"
          value={desc}
          onChange={this.handleChange}
          required 
          placeholder="Todo Description"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default TodoForm;