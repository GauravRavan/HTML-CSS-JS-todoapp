//console.log("hii");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value ===''){
alert("you must write something!");
	}
else{
let li = document.createElement("li");
li.innerHTML = inputBox.value;
listContainer.appendChild(li);
let span = document.createElement("span");
span.innerHTML = "\u00d7";
li.appendChild(span);


}
inputBox.value = '';
saveData();
}

listContainer.addEventListener("click", function(e){
	if(e.target.tagName === "LI")
	{
	
	e.target.classList.toggle("checked");
		saveData();
	}
else if(e.target.tagName === "SPAN")
	{
var confirm = window.confirm("Are you sure want to delete this element?");
	if (confirm){
	e.target.parentElement.remove();
	}
		saveData();
	}

}, false)

function saveData(){
localStorage.setItem("data",listContainer.innerHTML);
}


function ShowTask(){

listContainer.innerHTML = localStorage.getItem("data");
}

ShowTask();