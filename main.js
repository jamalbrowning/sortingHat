const students = [];
const expelledStudents = [];
let student_id = 1

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
    student.id = student_id
    students.push(student);
    student_id++
    
  } else {
    alert("Please fill in name");
  }
  
  printCard();
};
//print student information card
const printCard = () => {
  let domString = "";

  for (let i = 0; i < students.length; i++) {
    domString += `<div class="card mx-auto " style="width: 18rem;" id="${students[i].id}">
                  <div class="card-body">  
                    <h3 class="card-title">${students[i].name}</h3>
                    <h4 class="studentHouse">${students[i].house}<h4>
                      <button id="${students[i].id}" class="btn btn-primary expel">Expel</button>
                  </div>
                  </div>`;

    printToDom("#student-card", domString);
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
  let expelledStudent = students.find((obj) => obj.id === event.target.id);
  console.log(expelledStudent)
  expelledStudents.push(expelledStudent);
  let studentIndex = students.indexOf(expelledStudent);
  students.splice(studentIndex, 1);
 
  
  let exStudentCard = document.getElementById(event.target.id);
  exStudentCard.remove();
  // expelledStudentCards()
};

const expelledStudentCards = () => {
  let domString = ''
console.log(expelledStudents)
  for (let i = 0; i < expelledStudents.length; i++) {
    domString += `<div class="card mx-auto " style="width: 18rem;" id="${expelledStudents[i].id}">
                  <div class="card-body">  
                    <h3 class="card-title">${expelledStudents[i].name}</h3>
                    <h4 class="studentHouse">${expelledStudents[i].house}<h4>
                      <button id="${expelledStudents[i].id}" class="btn btn-primary expel">Expel</button>
                  </div>
                  </div>`;

    printToDom("#expelled-student-card", domString);
  }
}

const clickEvents = () => {
  document.querySelector("#sortingForm").addEventListener("click", sortingForm);
  
};

const init = () => {
  clickEvents();
};

init();
