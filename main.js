const printToDom = (selector, textToPrint) => {
	document.querySelector(selector).innerHTML = textToPrint;
};
//intersting
// create sorting form
const sortingForm = () => {
	let domString = "";

	domString += `<form>
                  <div class="form-group mx-auto sortForm">
                    <label for="exampleInputEmail1">Let the Hat decide your Fate</label><br>
                      <button type="submit" class="btn sortButton" id="sortName" >SORT</button>
                       <input type="text" class="form-control mx-auto" id="fullName"  placeholder="Enter Full Name" required>                                                                   
                    </div>
                  </form>`;
	printToDom("#sorting", domString);

	document.querySelector("#sortName").addEventListener("click", sortStudent);
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
// console.log(hat)
//create students
const students = [];
const expelledStudents = [];
const sortStudent = () => {
	let student = {};

  student.name = document.querySelector("#fullName").value;
  if(student.name !=''){
	student.house = hat();
	students.push(student);
  }


  printCard();
};
//print card and require field
const printCard = () => {
	let domString = "";

	for (let i = 0; i < students.length; i++) {
		if (students[i].name !== "") {
			domString += `<div class="card mx-auto " style="width: 18rem;" id="${students[i].name}">
                    <div class="card-body">  
                      <h3 class="card-title">${students[i].name}</h3>
                      <h4 class="studentHouse">${students[i].house}<h4>
                        <button id="${students[i].name}" class="btn btn-primary expel">Expel</button>
                    </div>
                    </div>`;
    printToDom("#card", domString);
		// console.log("STUDENTS HERE", students);
		}

		
		// document.querySelector(`#`).addEventListener('click', expelStudent);
	}
	let expelBtns = document.getElementsByClassName("expel");
	for (i = 0; i < expelBtns.length; i++) {
		expelBtns[i].addEventListener("click", expelStudent);
	}
};
// remove student when expel button is pressed
const expelStudent = (e) => {
	// console.log("STUDENTS on 82", students);
	let foundStudent = students.find((obj) => obj.name === event.target.id);
	let spliceStudent = students.indexOf(foundStudent);
	// console.log(students.indexOf(findStudent))
	students.splice(spliceStudent, 1)
  // console.log("STUDENTS on 87", students);
  expelledStudents.push(foundStudent)
  console.log('this student is expelled', expelledStudents)
  let exStudent = document.getElementById(event.target.id)
  exStudent.remove()
  
  // printExpelCard();
};
//trying to create a new div of expelled cards
// const printExpelCard = () => {
//   let domString = "";

//   for (let i = 0; i < expelledStudents[i].length; i++) {
//     if (expelledStudents[i].name !== "") {
//       domString += `<div class="card mx-auto " style="width: 18rem;" id="${expelledStudents[i].name}">
//                     <div class="card-body2">  
//                       <h3 class="card-title2">${expelledStudents[i].name}</h3>
//                       <h4 class="studentHouse2">Expelled<h4>
//                     </div>
//                     </div>`;
//     }

//     printToDom("#expelCard", domString);
    
//     // document.querySelector(`#`).addEventListener('click', expelStudent);
//   }
// }

const clickEvents = () => {
	document.querySelector("#sortingForm").addEventListener("click", sortingForm);
};

const init = () => {
	clickEvents();
	
};

init();
