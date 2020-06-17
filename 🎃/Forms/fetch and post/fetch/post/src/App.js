import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNewNinjaForm'

class App extends Component {
  state = {
    ninjasList: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (newNinja) => {
    newNinja.id = Math.random();
    let newNinjaList = [...this.state.ninjasList, newNinja];
    this.setState({
      ninjasList: newNinjaList
    });
  }

  deleteNinja = (id) => {
    // console.log(id);
    let UpdateNinjasList = this.state.ninjasList.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjasList: UpdateNinjasList
    });
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjasList} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;