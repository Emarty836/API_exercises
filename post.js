const url1 = 'https://jsonplaceholder.typicode.com/users';
const name1 = document.querySelector('#newName');
const newName = document.getElementById('name');
const newEmail = document.getElementById('email');
const addPerson = document.querySelector('.newPerson');

//  -------------- This was the data object gathered from https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#step-3-handling-post-requests.
// ---------------- I decided to add an email and an extra key value pair.  I displayed posted data on the HMTL file.
// let data = {
//     name: 'Sammy'
//   }

let unit = 1;

addPerson.addEventListener('click',()=>{
  unit = unit + 1;
  // data[unit].name='john';
  // data[unit].email='fff';
  let newObject = {
    name:newName.value,
    email:newEmail.value
}
  data.push(newObject);
  console.log(data);
});

// 1. To have new input POST-ed and also have it displayed
// 2. Figure out how to know if it has been posted. 

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

// fetch(request)
//   .then((response) => {
//     return response.json();
//   })
//   .then((postedData) => {
//     postedData.forEach((item) => {
//       let name = item.name;
//       let email = item.email;

//       let nameElement = document.createElement('div');
//       nameElement.innerHTML = `<span>${name}</span> - <span>${email}</span>`;

//       name1.appendChild(nameElement);
//     });
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
