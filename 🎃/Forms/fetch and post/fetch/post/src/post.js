import React, { Component } from 'react';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name:"",
      age:""
     }
  }

  nameToSend=(e)=>{
    e.preventDefault()
    this.setState({ name: e.target.value })
  }
  ageToSend=(e)=>{
    e.preventDefault()
    this.setState({ age: e.target.value })
  }
  handleSubmit=(e)=>{
    let data = "szia"
    e.preventDefault();
    alert(`${this.state.name}  with age of  ${this.state.age}`)
    fetch('http://127.0.0.1:3100/home' , {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    }).then(res => console.log(res))


  }
  

  render() { 
    return ( <div>
      <h1>Thanks the comment {this.state.name}</h1>

      <form onSubmit={ this.handleSubmit } >
        <label> Your name:</label>
        <input type="text" value={this.state.name} onChange={this.nameToSend} /><br/>

        <label> Your age:</label>
        <input type="number" value={this.state.age} onChange={this.ageToSend} /><br/>
        <button type="submit "  >  Submit</button>
      </form>
    </div> );
  }
}
 
export default PersonalInfo;