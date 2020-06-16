import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts:[],
      errorMsg: ""
     }
  }

  componentDidMount(){

fetch('https://jsonplaceholder.typicode.com/pos1ts')
.then(ress=> ress.json())
.then(res=>   this.setState( { posts : res})  )
.catch(err => {
        console.log(err) 
        this.setStatus({ errorMsg : 'There was an error'})})


  }

  render() { 
    const { posts , errorMsg } = this.state
    return ( 
    <div>
      List of :
      { posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null } 
      { errorMsg ? <div>{errorMsg}</div> : null}

    </div> 
    );
  }
}
 
export default PostList;

