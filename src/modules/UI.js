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

            //clear project section before displaying
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
            
            if(!selectedProject){
                const newTodoSection = document.querySelector('.newTodoSection')
                newTodoSection.style.display = 'block'
            }

            //clear main before showing todos
            const todoSection = document.querySelector('.todos')
            todoSection.textContent = ''

            //get project by using index of element that was clicked
            selectedProject = data.projects[index]

            const projectName = document.createElement('h1')
            projectName.textContent = selectedProject.name
            todoSection.append(projectName)

            selectedProject.todos.forEach(todo => {
                const todoDiv = document.createElement('div')
                todoDiv.className = 'todo'
                todoDiv.textContent = todo.name
                todoSection.append(todoDiv)
            })
        }

        function addProject() {
            let name = prompt("Enter project name")
            data.projects.push(new Project(name))
            displayProjects()
        }

        function addTodo() {
            if (selectedProject) {
                let name = prompt("Enter todo name")
                selectedProject.addTodo(new Todo(name))
                let index = data.projects.findIndex(p => p === selectedProject)
                displayTodos(index)
            }else{
                alert("Select a existing Project or create a new one.")
            }
        }
    }
}