const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){ // if input box is empty, they should have to write something
       alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");  //vreate li element
        li.innerHTML = inputBox.value;  //add text to the li element, whatever text in the input field is added to the li
        listContainer.appendChild(li);  //display the li element in the list container
        let span = document.createElement("span");  //create span element
        span.innerHTML = "\u00d7";     //add close button to the span element
        li.appendChild(span);  //display the span element 
    }
    inputBox.value = '';  //clear the input box after adding the task
    saveList();  //save the updated list
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){  //if clicked on li
        e.target.classList.toggle("checked");  //add checked class to the li element
        saveList();  //save the updated list
    }
    else if(e.target.tagName === "SPAN"){  //if we click on a span
        e.target.parentElement.remove();    //it will remove that li, so task is delted
        saveList();  //save the updated list
    }
}, false); 

//make our tags stay in the list even after refreshing the page

function saveList(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

displayData();  //display the data when the page is loaded