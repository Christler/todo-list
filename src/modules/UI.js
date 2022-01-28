import Project from "./Project"
import Todo from "./Todo"
import TempData from "./TempDataStore"

export default class UI {

    static loadPage() {

        //get data from temp data store
        const data = TempData()
        displayProjects()
        createEventListeners()
        let selectedProject

        function createEventListeners() {
            const newProjectBtn = document.querySelector('.newProjectBtn')
            newProjectBtn.addEventListener('click', addProject)

            const newTodoBtn = document.querySelector('.newTodoBtn')
            newTodoBtn.addEventListener('click', addTodo)
        }

        function displayProjects() {

            const projectsSection = document.querySelector('.projects')
            projectsSection.textContent = ''

            let projects = data.projects

            projects.forEach((project, index) => {
                let element = document.createElement('p')
                element.className = 'project'
                element.textContent = project.name
                element.addEventListener('click', () => {
                    displayTodos(index)
                })
                projectsSection.append(element)
            })
        }

        function displayTodos(index) {

            if (!selectedProject) {
                const newTodoSection = document.querySelector('.newTodoSection')
                newTodoSection.style.display = 'block'
            }

            const todoSection = document.querySelector('.todos')
            todoSection.textContent = ''

            selectedProject = data.projects[index]

            const projectName = document.createElement('h1')
            projectName.textContent = selectedProject.name
            todoSection.append(projectName)

            selectedProject.todos.forEach((todo, index) => {
                const todoDiv = document.createElement('div')
                todoDiv.className = 'todo'
                todoDiv.dataset.indexNumber = index
                
                const todoCheckbox = document.createElement('input')
                todoCheckbox.setAttribute('type', 'checkbox')
                todoCheckbox.checked = todo.getCompleteStatus()
                todoCheckbox.addEventListener('click', () => {
                    markComplete(index)
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
                    deleteTodo(index)
                })
                
                todoDiv.append(todoCheckbox, todoName, datePicker, deleteBtn)
                todoSection.append(todoDiv)
            })
        }

        function addProject() {
            let name = prompt("Enter project name")
            data.projects.push(new Project(name))
            displayProjects()
        }

        function addTodo() {
            let name = prompt("Enter todo name")
            selectedProject.addTodo(new Todo(name))
            displayTodos(data.getProjectIndex(selectedProject))
        }

        function deleteTodo(index){
            selectedProject.deleteTodo(index)
            displayTodos(data.getProjectIndex(selectedProject))
        }

        function markComplete(index){
            selectedProject.todos[index].setCompleteStatus()
        }
    }
}