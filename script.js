const inputBox= document.getElementById("input-box");
const listContainer=document.getElementById("list-contain");

function addTask(){
    if(inputBox.value ===''){
        alert("You must Write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    savedata();
}


listContainer.addEventListener("click", function (e) {
        if(e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            savedata();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            savedata();
        }
}, false);

function savedata(){
    localStorage.setItem("Data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem('Data');   
}
showTask();
inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
const inputBox= document.getElementById("input-box");
const listContainer=document.getElementById("list-contain");

function addTask(){
    if(inputBox.value ===''){
        alert("You must Write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    savedata();
}


listContainer.addEventListener("click", function (e) {
        if(e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            savedata();
            updateCounter(); 
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            savedata();
            updateCounter(); 
        }
}, false);

function savedata(){
    localStorage.setItem("Data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem('Data');   
}
showTask();
updateCounter(); 

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
        updateCounter();
    }
});
function clearAll() {
    listContainer.innerHTML = "";
    savedata();
    updateCounter();
}
let timestamp = new Date().toLocaleString();
li.innerHTML = `${inputBox.value} <span class="timestamp">${timestamp}</span>`;

li.addEventListener("dblclick", function () {
    let editedText = prompt("Edit your task:", li.firstChild.textContent.trim());
    if (editedText) {
        li.firstChild.textContent = editedText + " ";
        savedata();
    }
});
function updateCounter() {
    const tasks = listContainer.getElementsByTagName("li");
    document.getElementById("counter").innerText = `Total Tasks: ${tasks.length}`;
}

