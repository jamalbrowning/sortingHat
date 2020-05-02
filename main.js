const printToDom = (selector, textToPrint) => {
  document.querySelector(selector).innerHTML = textToPrint;
};
//intersting
// create sorting form
  const sortingForm = () => {
   let domString = ''

   domString += `<form>
                  <div class="form-group mx-auto sortForm">
                    <label for="exampleInputEmail1">Let the Hat decide your Fate</label><br>
                      <button type="submit" class="btn sortButton" id="sortName" >SORT</button>
                       <input type="text" class="form-control mx-auto" id="fullName"  placeholder="Enter Full Name" required>                                                                   
                    </div>
                  </form>`
     printToDom('#sorting', domString);   
     
     document.querySelector('#sortName').addEventListener('click', sortStudent)
     
   }

//create sorting hat
const hat = () => {
  sortedHouse =  (Math.floor(Math.random() * 4))
  
  switch (sortedHouse) {
  case 0:
    return("Gryffindor");
    break;
  case 1:
    return ("Slytherin");
    break;
  case 2:
    return ("Hufflepuff");
    break;
  case 3:
    return ("Ravenclaw");
    break;
  }
}
// console.log(hat)
//create students
const students = [];
const sortStudent = () =>{
  let student = [];

  student.name = document.querySelector('#fullName').value;
  student.house = hat();
  students.push(student);

  printCard();
  
}
//print card and require field
const printCard = () => {
  let domString = '';
 
  
  for (let i = 0; i < students.length; i++) {
  
    if(students[i].name === ''){
      
    }  else {  
      domString += `<div class="card mx-auto " style="width: 18rem;" id="${students[i].name}">
                    <div class="card-body">  
                      <h3 class="card-title">${students[i].name}</h3>
                      <h4 class="studentHouse">${students[i].house}<h4>
                        <button id="${students[i].name}" class="btn btn-primary hello">Expel</button>
                    </div>
                    </div>`
    }  

  printToDom('#card', domString); 
    
  
  }
}
      
  const expelStudent = (obj) => {
    const newStudents = [];
  if(obj[i].name === event.target.id){
    console.log('this is working')
  }
  
  }    


const clickEvents = () => {
  document.querySelector('#sortingForm').addEventListener('click', sortingForm);
  document.querySelector(`#${students[i].name}`).addEventListener('click', expelStudent); 
}

const init = () => {
  clickEvents();
  expelStudent(students)
};

init();
