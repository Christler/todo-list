import Project from "./Project"
import TempData from "./TempDataStore"

export default class UI {

    static loadPage(){

        //get data from temp data store
        const data = TempData()
        displayProjects()
        createEventListeners()

        function createEventListeners(){
            const newProjectBtn = document.querySelector('.newProjectBtn')
            newProjectBtn.addEventListener('click', addProject)
        }
        
        function displayProjects(){
            
            //clear project section before displaying
            const projectsSection = document.querySelector('.projects')
            projectsSection.textContent = ''
            
            let projects = data.projects
            
            projects.forEach((project, index) => {
                let element = document.createElement('p')
                element.className = 'project'
                element.dataset.indexNumber = index
                element.textContent = project.name
                element.addEventListener('click', displayTodos)
                projectsSection.append(element)
            })
        }

        function displayTodos(){
            
            //clear main before showing todos
            const mainSection = document.querySelector('.main')
            mainSection.textContent = ''
    
            //get project by using index of element that was clicked
            let index = this.dataset.indexNumber
            let project = data.projects[index]

            const projectName = document.createElement('h1')
            projectName.textContent = project.name
            mainSection.append(projectName)

            project.todos.forEach(todo => {
                const todoDiv = document.createElement('div')
                todoDiv.className = 'todo'
                todoDiv.textContent = todo.name
                mainSection.append(todoDiv)
            })  
        }

        function addProject(){
            let name = prompt("Enter project name")
            data.projects.push(new Project(name))
            displayProjects()
        }
    }
}