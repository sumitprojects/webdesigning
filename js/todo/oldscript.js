    // document object model

    jsvalidation.formElement = document.todoForm || document.getElementById('todoForm');
    jsvalidation.formCreator();
    var addtodo = document.getElementById('addtodo'),
        addbutton = document.getElementById('add'),
        todoitem = document.getElementById('todoitem');
    // var todoData = [];
    // var selectDel = function() {
    //     //   console.log(this.previousSibling);
    //     var itemNum = parseInt(this.previousSibling.getAttribute('item'));
    //     // this.parentNode.classList.add('disble');
    //     //this.previousSibling.classList.add('delete-todo');
    //     todoData.splice(itemNum, 1);
    //     this.parentNode.remove();
    //     displayItems();

    // };

    // var displayItems = function() {
    //     if (typeof todoData !== 'undefined' && todoData !== null) {
    //         todoitem.innerHTML = "";
    //         for (let index = 0; index < todoData.length; index++) {
    //             const element = todoData[index];
    //             todoitem.innerHTML += "<p class='todo-item'><span class='item' item=" + index + ">" + element + "</span><button class='del'>x</button></p>";
    //         }
    //         var deletebutton = document.getElementsByClassName('del');
    //         for (let index = 0; index < deletebutton.length; index++) {
    //             const element = deletebutton[index];
    //             element.addEventListener('click', selectDel);
    //         }
    //     }
    // };
    // var addTodoItem = function() {
    //     if (typeof addtodo.value !== 'undefined' && addtodo.value !== null && addtodo.value !== '') {
    //         if (todoData.indexOf(addtodo.value) == -1) {
    //             todoData.push(addtodo.value);
    //             displayItems();
    //         }
    //     }
    // };
    addbutton.addEventListener('click', todoApp.addTodoItem);