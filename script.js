var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");

console.log(btn1);
console.log(btn2);
console.log(ul[0]);
console.log(story);

function AddItem() {
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача!";
	newLi.className = "item";
	myList.appendChild(newLi);
	popup.style.display = "none";
	
}


function DelItem() {
	myList.removeChild(story[0]);

	if(story.length == 0){
		popup.style.display = "block";
	}
	
}

function closePopup(){
	popup.style.display = "none";

}

btn1.addEventListener("click", AddItem);
btn2.addEventListener("click", DelItem);
close.addEventListener("click", closePopup);
