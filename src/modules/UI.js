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

            data.projects.forEach((project, index) => {
                let element = document.createElement('p')
                element.className = 'project'
                element.textContent = project.name
                element.addEventListener('click', () => {
                    project.displayTodos()
                    selectedProject = data.projects[index]
                })
                projectsSection.append(element)
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
    }
}