fetch('https://jsonplaceholder.typicode.com/comments/')
  .then(response => response.json())
  //.then(json => console.log(json))
  .then(json => {
    const last = json.filter(user => user.postId == 1).map(comment => comment.body).sort((a,b) => a.localeCompare(b))
    const total = last.reduce((total,current) => total + current)
    console.log(total)
    console.log(last)})