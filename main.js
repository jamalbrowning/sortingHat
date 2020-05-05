const students = [];
const expelledStudents = [];

const printToDom = (selector, textToPrint) => {
  document.querySelector(selector).innerHTML = textToPrint;
};
// create sorting form
const sortingForm = () => {
  let domString = "";

  domString += `<form id="form">
                  <div class="form-group mx-auto sortForm">
                    <label for="exampleInputEmail1">Let the Hat decide your Fate</label><br>
                      <input type="text"  class="form-control mx-auto" id="fullName"  placeholder="Enter Full Name" >   
                      <button type="submit" class="btn sortButton" id="sortName" >SORT</button>                                                                 
                    </div>
                  </form>`;
  printToDom("#sorting", domString);
  document.querySelector("#sortName").addEventListener("click", sortStudent);
  document.querySelector("#sortName").addEventListener("click", clearForm);
};

const clearForm = () => {
  document.getElementById("form").reset();
};
//create sorting hat
const hat = () => {
  sortedHouse = Math.floor(Math.random() * 4);

  switch (sortedHouse) {
    case 0:
      return "Gryffindor";
      break;
    case 1:
      return "Slytherin";
      break;
    case 2:
      return "Hufflepuff";
      break;
    case 3:
      return "Ravenclaw";
      break;
  }
};

const sortStudent = () => {
  let student = {};
  let domString = "";

  student.name = document.querySelector("#fullName").value;

  if (student.name != "") {
    student.house = hat();
    students.push(student);
  } else {
    alert("Please fill in name");
  }

  printCard();
};
//print student information card
const printCard = () => {
  let domString = "";

  for (let i = 0; i < students.length; i++) {
    domString += `<div class="card mx-auto " style="width: 18rem;" id="${students[i].name}">
                  <div class="card-body">  
                    <h3 class="card-title">${students[i].name}</h3>
                    <h4 class="studentHouse">${students[i].house}<h4>
                      <button id="${students[i].name}" class="btn btn-primary expel">Expel</button>
                  </div>
                  </div>`;

    printToDom("#card", domString);
  }
  addExpelEvents();
};
// add eventListener to each expel button
const addExpelEvents = () => {
  let expelBtns = document.getElementsByClassName("expel");
  for (i = 0; i < expelBtns.length; i++) {
    expelBtns[i].addEventListener("click", expelStudent);
  }
};
// remove student when expel button is pressed
const expelStudent = (e) => {
  let expelledStudent = students.find((obj) => obj.name === event.target.id);
  let studentIndex = students.indexOf(expelledStudent);
  students.splice(studentIndex, 1);
  expelledStudents.push(expelledStudent);
  let exStudent = document.getElementById(event.target.id);
  exStudent.remove();
  // printExpelCard();
};
const clickEvents = () => {
  document.querySelector("#sortingForm").addEventListener("click", sortingForm);
};

const init = () => {
  clickEvents();
};

init();
