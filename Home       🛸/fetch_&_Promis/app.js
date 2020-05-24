//  THis os a get req to a website. we make the response to a json then we log it out

const getPosts =()=>{
return fetch(`http://jsonplaceholder.typicode.com/posts`) 
  .then(res => res.json())    //get the json out aka the body 
  .then(posts => console.log(posts))
}

// new post to POST
const post1 = {
  title:'All about fetch',
  body: 'Fetch is so cool',
  userId: 1
}

const newPost = post =>{
  const options = {
    method:'POST',         //or DELETE or PUT
    body: JSON.stringify(post),
    headers: new Headers({
      'Content-Type' : 'application/json'
    })
  }
  return fetch(`http://jsonplaceholder.typicode.com/posts`, options)
  .then(res => res.json())
  .then(res =>console.log(res))
  .catch(error => console.error(`Error: ${error}`))
}
newPost(post1)