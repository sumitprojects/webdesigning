    const todoApp = {
        todoData: [],
        todoInput: null,
        todoButton: null,
        todoDisplay: null,
        selectDel: function() {
            //   console.log(this.previousSibling);
            var itemNum = parseInt(this.previousSibling.getAttribute('item'));
            // this.parentNode.classList.add('disble');
            //this.previousSibling.classList.add('delete-todo');
            todoApp.todoData.splice(itemNum, 1);
            this.parentNode.remove();
            todoApp.displayItems();
        },
        displayItems: function() {
            if (typeof todoApp.todoData !== 'undefined' && todoApp.todoData !== null) {
                todoApp.todoDisplay.innerHTML = "";
                for (let index = 0; index < todoApp.todoData.length; index++) {
                    const element = todoApp.todoData[index];
                    todoApp.todoDisplay.innerHTML += "<p class='todo-item'><span class='item' item=" + index + ">" + element + "</span><button class='del'>x</button></p>";
                }
                var deletebutton = document.getElementsByClassName('del');
                for (let index = 0; index < deletebutton.length; index++) {
                    const element = deletebutton[index];
                    element.addEventListener('click', todoApp.selectDel);
                }
            }
        },
        addTodoItem: function() {
            if (typeof todoApp.todoInput.value !== 'undefined' && todoApp.todoInput.value !== null && todoApp.todoInput.value !== '') {
                if (todoApp.todoData.indexOf(todoApp.todoInput.value) == -1) {
                    todoApp.todoData.push(todoApp.todoInput.value);
                    todoApp.todoInput.value = "";
                    todoApp.displayItems();
                } else {
                    jsvalidation.customValidation(todoApp.todoInput, 'Already Added!', 'error');
                }
            }
        },
        todoReg: function() {
            todoApp.todoButton.addEventListener('click', todoApp.addTodoItem)
        }
    };