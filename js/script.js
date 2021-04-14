'use strict'

function Person(name_param, age_param, email_param, nickname_param) {
  this.name = name_param; //property name of the eventual object to be created
  this.age = age_param;
  this.email = email_param;
  this.nickname = nickname_param;
}

// All of this code in the function is ready to be called. 
Person.prototype.render = function() {

  //1. select the item we want to attach new elements to
  //I have to go target the main html element. That will be the parent element of all of the sections
  let mainSection = document.getElementById('mainSection')
  
  //2. Create all the elements in our model
  // need a section
  // need h2
  // 2 p's
  let card = document.createElement('section');

  card.className = 'card';

  let nameH2 = document.createElement('h2');
  let age = document.createElement('p');
  
  let nickNameP = document.createElement('p');

  //3. assign the values of Person to these elements

  nameH2.textContent = this.name;
  age.textContent = `age: ${this.age}`;
  nickNameP.textContent = `nickname: ${this.nickname}`;
  
  //4. append to the parent..
  card.appendChild(nameH2);
  card.appendChild(age);
  card.appendChild(nickNameP);

  mainSection.appendChild(card);
}

// 1. Find the button and identify the event
let createButton = document.getElementById('create'); // click event

// 2. Add an event listener to the click event
createButton.addEventListener('click', createPerson)

// create a new function called createPerson, leave the body blank
function createPerson() {
  
  //List out the steps to render a person on the html screen
  //1. We need all of the input from user, stored in variables 
  let name = document.getElementById('name').value; 
  let age = document.querySelector('#age').value;
  let nickname = document.getElementById('nickname').value; 

  //2. Pass the input to the constructor function Person.

  let person = new Person(name, age, "" , nickname)

  //3. tell the individual to invoke its render() function

  person.render();

}





