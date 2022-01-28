export default class Project{

    constructor(name){
        this.name = name
        this.todos = []
    }

    addTodo(todo){
        this.todos.push(todo)
    }

    deleteTodo(index){
        this.todos.splice(index, 1)
    }

    displayTodos(){
        const todoSection = document.querySelector('.todos')
            todoSection.textContent = ''

            const projectName = document.createElement('h1')
            projectName.textContent = this.name
            todoSection.append(projectName)

            this.todos.forEach((todo, index) => {
                const todoDiv = document.createElement('div')
                todoDiv.className = 'todo'
                
                const todoCheckbox = document.createElement('input')
                todoCheckbox.setAttribute('type', 'checkbox')
                todoCheckbox.checked = todo.getCompleteStatus()
                todoCheckbox.addEventListener('click', () => {
                    todo.setCompleteStatus()
                })
                
                const todoName = document.createElement('div')
                todoName.textContent = todo.name

                const datePicker = document.createElement('input')
                datePicker.setAttribute('type', 'date')
                datePicker.value = todo.getDueDate()
                datePicker.addEventListener('change', (e) => {
                    todo.setDueDate(e.target.value)
                })
                
                const deleteBtn = document.createElement('button')
                deleteBtn.className = 'deleteBtn'
                deleteBtn.textContent = 'X'
                deleteBtn.addEventListener('click', () => {
                    this.deleteTodo(index)
                    this.displayTodos()
                })
                
                todoDiv.append(todoCheckbox, todoName, datePicker, deleteBtn)
                todoSection.append(todoDiv)
            })
    }
}