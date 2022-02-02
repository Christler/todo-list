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
                    if(selectedProject === data.projects[index]){
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

        function todaysTodos(){
            let today = format(new Date(), 'MM/dd/yyyy')
            console.log(`Today's date: ${today}`)
            data.projects.forEach(project => {
                let todos = project.todos
                console.log(todos.filter(todo => todo.getDueDate() === today))
            })
        }
    }
}