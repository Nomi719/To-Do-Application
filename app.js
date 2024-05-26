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