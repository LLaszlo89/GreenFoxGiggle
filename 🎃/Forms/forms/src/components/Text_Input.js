import React, { Component } from 'react';

class TextInput extends Component {

  constructor(){
    super();
    this.state ={
      username: "",
      comments: "",
      topic: "react"
    } 
  }

   handelUserNameChange=(event)=>{
   this.setState({
     username: event.target.value
   }) 
  }
  handleComments=(e)=>{
    this.setState({
      comments: e.target.value
    })
  }
  handleTopic=(e)=>{
    this.setState({
      topic: e.target.value
    })

  }
  
  handleSubmit=(e)=>{
    e.preventDefault()
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}` )
    console.log(`${this.state.username} ${this.state.comments} ${this.state.topic}`)

  }

  render() { 
    return ( 
    <div>

      <form onSubmit={this.handleSubmit}>
      <label> Your name is:</label>
      <input type="text" value={this.state.username} onChange={this.handelUserNameChange}/>

      <div><label > comments </label>
      <textarea value={this.state.comments} cols="30" rows="10" onChange={this.handleComments}></textarea></div>
     
     <div>
       <label>Topic</label>
       <select value={this.state.topic} onChange={this.handleTopic}>
         <option value="react">React</option>
         <option value="angular">Angular</option>
         <option value="vue">Vue</option>
       </select>
     </div>

     
     <button type="submit">Submit</button>
     
      </form>

    </div> );
  }
}
 
export default TextInput;