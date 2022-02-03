import format from "date-fns/format"
import Project from "./Project"
import Todo from "./Todo"
import TempData from "./TempDataStore"

export default class UI {

    static loadPage() {

        const data = TempData()
        displayProjects()
        createEventListeners()
        let selectedProject

        function createEventListeners() {
            const today = document.querySelector('.today')
            today.addEventListener('click', todaysTodos)

            const newProjectBtn = document.querySelector('.newProjectBtn')
            newProjectBtn.addEventListener('click', addProject)

            const newTodoBtn = document.querySelector('.newTodoBtn')
            newTodoBtn.addEventListener('click', addTodo)
        }

        function displayProjects() {

            const projectsSection = document.querySelector('.projects')
            projectsSection.textContent = ''

            data.projects.forEach((project, index) => {
                let projectDiv = document.createElement('div')
                projectDiv.className = 'project'

                let projectName = document.createElement('div')
                projectName.className = "projectName"
                projectName.textContent = project.name
                projectName.addEventListener('click', () => {
                    project.displayTodos()
                    selectedProject = data.projects[index]
                })

                let deleteProjectBtn = document.createElement('button')
                deleteProjectBtn.textContent = 'X'
                deleteProjectBtn.className = 'deleteProjectBtn'
                deleteProjectBtn.addEventListener('click', () => {
                    if (selectedProject === data.projects[index]) {
                        const todoSection = document.querySelector('.todos')
                        todoSection.textContent = ''
                    }
                    data.deleteProject(index)
                    displayProjects()
                })

                projectDiv.append(projectName, deleteProjectBtn)
                projectsSection.append(projectDiv)
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
            selectedProject.displayTodos()
        }

        function todaysTodos() {

            const newTodoSection = document.querySelector('.newTodoSection')
            newTodoSection.classList.add('hidden')

            const todoSection = document.querySelector('.todos')
            todoSection.textContent = ''

            let today = format(new Date(), 'yyyy-MM-dd')

            data.projects.forEach((project, i) => {
                project.todos.forEach((todo, j) => {
                    if (todo.getDueDate() === today) {
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

                        const deleteBtn = document.createElement('button')
                        deleteBtn.className = 'deleteTodoBtn'
                        deleteBtn.textContent = 'X'
                        deleteBtn.addEventListener('click', () => {
                            data.projects[i].deleteTodo(j)
                            todaysTodos()
                        })

                        todoDiv.append(todoCheckbox, todoName, dueDate, deleteBtn)
                        todoSection.append(todoDiv)
                    }
                })
            })
        }
    }
}