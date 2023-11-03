const url1 = 'https://jsonplaceholder.typicode.com/users';
const name1 = document.querySelector('#newName');

//  -------------- This was the data object gathered from https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#step-3-handling-post-requests.
// ---------------- I decided to add an email and an extra key value pair.  I displayed posted data on the HMTL file.
// let data = {
//     name: 'Sammy'
//   }

let data = [
  {
    name: 'Sammy',
    email: 'Sammy@gmail.com'
},
  {
    name: 'Tom',
    email: 'Tom@gmail.com'}
  ]

let request = new Request(url1, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: new Headers({
    'Content-Type': 'application/json; charset=UTF-8'
  })
});

fetch(request)
  .then(function() {
    console.log(data);
    name1.innerHTML = `${data[0].name}`;
    let email1 = document.createElement('span');
    email1.classList.add('email');
    email1.innerHTML = `${data[0].email}`;
    name1.insertAdjacentElement('afterend', email1);
    
  });

