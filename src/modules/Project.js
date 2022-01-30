export default class Project {

    constructor(name) {
        this.name = name
        this.todos = []
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    deleteTodo(index) {
        this.todos.splice(index, 1)
    }

    displayTodos() {
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
            todoName.className = 'todoName'
            todoName.textContent = todo.name

            const dueDate = document.createElement('p')
            dueDate.className = 'dueDate'
            dueDate.textContent = todo.getDueDate()

            const datePicker = document.createElement('input')
            datePicker.setAttribute('type', 'date')
            datePicker.className = 'datePicker'
            datePicker.value = todo.getDueDate()
            datePicker.addEventListener('change', (e) => {
                todo.setDueDate(e.target.value)
                this.displayTodos()
            })
            datePicker.className = 'hidden'

            const calendarIcon = document.createElement('i')
            calendarIcon.className = 'fas fa-calendar'
            calendarIcon.classList.add('calendar')
            calendarIcon.addEventListener('click', () =>{
                datePicker.classList.toggle('hidden')
            })

            const deleteBtn = document.createElement('button')
            deleteBtn.className = 'deleteTodoBtn'
            deleteBtn.textContent = 'X'
            deleteBtn.addEventListener('click', () => {
                this.deleteTodo(index)
                this.displayTodos()
            })

            todoDiv.append(todoCheckbox, todoName, dueDate, datePicker, calendarIcon, deleteBtn)
            todoSection.append(todoDiv)
        })
    }
}