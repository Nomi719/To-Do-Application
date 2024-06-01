function addTodo() {
    var todoParent = document.getElementById("todoParent")
    
    //input
    var todoInput = document.getElementById("todoInput")
    if(todoInput.value.length<3){
        alert("Enter correct todo value")
        return
    }

// 

//create Li

var li = document.createElement("li")

//set li value

li.innerHTML = todoInput.value
// console.log("li",li)

//create edit or delete btn

var editBtn = document.createElement("button")
editBtn.setAttribute("onClick", "editTodo(this)")
editBtn.innerHTML = "EDIT"

var deleteBtn = document.createElement("button")
deleteBtn.innerHTML  = "DELETE"
deleteBtn.setAttribute("onclick", "delTodo(this)")

console.log("deleteBtn", deleteBtn)

li.appendChild(editBtn)
li.appendChild(deleteBtn)

todoParent.appendChild(li)
todoInput.value = ""

}


function deleteAll() {
    var todoParent = document.getElementById("todoParent")
    console.log(todoParent.innerHTML)
    todoParent.innerHTML = ""
}

function delTodo(ele) {
    console.log("delTodo", ele.parentNode)

    ele.parentNode.remove()
}   

function editTodo(ele){
    // console.log("ele edit",
    //     ele.previousSibling.nodeValue = "HELLO WORLD"
    // )

    var editVal = prompt("Enter value", ele.previousSibling.nodeValue)
    console.log(editVal)
    ele.previousSibling.nodeValue = editVal
}

let checkBox = document.createElement("todoInput");
checkBox.type = "checkbox";
todoInput.prepend(checkBox);

checkBox.onchange = function () {
  if (checkBox.checked) {
    todoInput.style.textDecoration = "line-through";
  } else {
    todoInput.style.textDecoration = "none";
  }
};