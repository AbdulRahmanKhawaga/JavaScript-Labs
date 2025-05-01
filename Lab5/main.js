//Q1:Image Slider
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let slideShowBtn = document.getElementById("slideShowBtn");
let stopBtn = document.getElementById("stopBtn");
let img = document.getElementById("sliderImage");

let count = 1;
let slideshowInterval = null;

function rightSlide() {
  count++;
  if (count > 3) count = 1;
  updateImage();
}

function leftSlide() {
  count--;
  if (count < 1) count = 3;
  updateImage();
}

function updateImage() {
  img.src = `/img/img${count}.jpeg`;
}

function startSlideshow() {
  slideshowInterval = setInterval(rightSlide, 1000);
  prevBtn.disabled = true;
  nextBtn.disabled = true;
  slideShowBtn.disabled = true;
  stopBtn.disabled = false;
  stopBtn.style.backgroundColor = "red";
}

function stopSlideshow() {
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null;

    prevBtn.disabled = false;
    nextBtn.disabled = false;
    slideShowBtn.disabled = false;
    stopBtn.disabled = true;
    stopBtn.style.backgroundColor = "#cccccc";
  }
}

nextBtn.addEventListener("click", rightSlide);
prevBtn.addEventListener("click", leftSlide);
slideShowBtn.addEventListener("click", startSlideshow);
stopBtn.addEventListener("click", stopSlideshow);

//====================================================================================================================================================================
//Q2:Student Form
const studentName = document.getElementById("studentName");
const studentGrade = document.getElementById("studentGrade");
const departmentRadios = document.getElementsByName("department");
const nameError = document.getElementById("nameError");
const gradeError = document.getElementById("gradeError");
const departmentError = document.getElementById("departmentError");
const filterDropdown = document.getElementById("filterDropdown");
const sortDropdown = document.getElementById("sortDropdown");
const form = document.getElementById("studentForm");
const table = document.getElementById("studentsTable");

let students = [];

function getSelectedDepartment() {
  for (const radio of departmentRadios) {
    if (radio.checked) return radio.value;
  }
  return null;
}

function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Validations
function validateName() {
  const name = studentName.value.trim();
  if (!name) {
    nameError.innerText = "Student name cannot be empty";
    nameError.style.display = "inline";
    return false;
  }

  if (/\d/.test(name)) {
    nameError.innerText = "Student name cannot contain numbers";
    nameError.style.display = "inline";
    return false;
  }

  const isDuplicate = students.some(
    (student) => student.name.toLowerCase() === name.toLowerCase()
  );
  if (isDuplicate) {
    nameError.innerText = "Student name already exists";
    nameError.style.display = "inline";
    return false;
  }

  nameError.style.display = "none";
  return true;
}

function validateGrade() {
  const gradeVal = studentGrade.value;
  if (gradeVal === "") {
    gradeError.innerText = "Grade cannot be empty";
    gradeError.style.display = "inline";
    return false;
  }

  const grade = parseFloat(gradeVal);
  if (isNaN(grade)) {
    gradeError.innerText = "Grade must be a number";
    gradeError.style.display = "inline";
    return false;
  }

  if (grade < 0 || grade > 100) {
    gradeError.innerText = "Grade must be between 0 and 100";
    gradeError.style.display = "inline";
    return false;
  }

  gradeError.style.display = "none";
  return true;
}

function validateDepartment() {
  const department = getSelectedDepartment();
  if (!department) {
    departmentError.innerText = "Please select a department";
    departmentError.style.display = "inline";
    return false;
  }

  departmentError.style.display = "none";
  return true;
}

// addStudent Logic
function addStudent(e) {
  e.preventDefault();

  const isValid = validateName() & validateGrade() & validateDepartment();

  if (!isValid) return;

  const name = capitalizeFirstLetter(studentName.value);
  const grade = parseFloat(studentGrade.value);
  const department = getSelectedDepartment();

  const tr = document.createElement("tr");

  tr.className = grade >= 76 ? "excellent" : grade >= 61 ? "average" : "fail";

  tr.innerHTML = `
    <td>${name}</td>
    <td>${grade}</td>
    <td>${department}</td>
    <td>
    <button style="background-color:transparent;border:none;padding:5px 10px;cursor:pointer;">
    <i class="fa-solid fa-trash-can" style="color:red;font-size:1.5rem"></i>
    </button>
    </td>
  `;

  const deleteBtn = tr.querySelector("button");

  const studentObj = { name, grade, department, row: tr, deleteBtn };
  students.push(studentObj);

  table.tBodies[0].appendChild(tr);

  deleteBtn.addEventListener("click", () => {
    studentObj.row.remove();
    students = students.filter((s) => s !== studentObj);
    applyFilterAndSort();
  });

  form.reset();
  applyFilterAndSort();
}

// Filtering & Sorting
function applyFilterAndSort() {
  const filterValue = filterDropdown.value;
  const sortValue = sortDropdown.value;

  let filtered = students.filter((student) => {
    if (filterValue === "passed") return student.grade >= 60;
    if (filterValue === "failed") return student.grade < 60;
    return true; // "all"
  });

  if (sortValue === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortValue === "grade") {
    filtered.sort((a, b) => b.grade - a.grade);
  }

  table.tBodies[0].innerHTML = "";
  for (const student of filtered) {
    table.tBodies[0].appendChild(student.row);
  }
}

// Live Validation
studentName.addEventListener("input", () => {
  if (/\d/.test(studentName.value)) {
    nameError.innerText = "Student name cannot contain numbers";
    nameError.style.display = "inline";
  } else {
    nameError.style.display = "none";
  }
});

// Event Listeners
form.addEventListener("submit", addStudent);
filterDropdown.addEventListener("change", applyFilterAndSort);
sortDropdown.addEventListener("change", applyFilterAndSort);

//====================================================================================================================================================================

//Bonus to do list question
const toDoForm = document.getElementById("toDoForm");
const taskInput = document.getElementById("task");
const toDoError = document.getElementById("toDoError");
const toDoTableBody = document.getElementById("toDoTableBody");

let toDoList = [];

function addAToDo(e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    toDoError.innerText = "Task cannot be empty";
    toDoError.style.display = "inline";
    return;
  }

  toDoError.style.display = "none";

  const tr = document.createElement("tr");

  const doneCell = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "custom-checkbox";
  doneCell.appendChild(checkbox);
  tr.appendChild(doneCell);

  const taskCell = document.createElement("td");
  taskCell.innerText = taskText;
  taskCell.style.color ="rgb(104,9,9)";
  taskCell.style.fontSize= "1.33rem";
  tr.appendChild(taskCell);

  const deleteCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.style.backgroundColor = "transparent";
  deleteBtn.style.border = "none";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.innerHTML=`
    <i class="fa-solid fa-trash-can" style="color:red;font-size:1.3rem"></i>
    `
  deleteCell.appendChild(deleteBtn);
  tr.appendChild(deleteCell);

  toDoTableBody.appendChild(tr);

  checkbox.addEventListener("change", () => {
    taskCell.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  deleteBtn.addEventListener("click", () => {
    tr.remove();
  });

  taskInput.value = "";
}

toDoForm.addEventListener("submit", addAToDo);
