// import ProjectList from "./ProjectList";
// import Project from "./Project";
// import Todo from "./Todo";
import TempData from "./TempDataStore"

export default class UI {

    static loadPage(){

        //get data from temp data store
        const data = TempData()
        displayProjects()
        
        function displayProjects(){
            const projectsSection = document.querySelector('.projects')
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
            
            const mainSection = document.querySelector('.main')
            mainSection.textContent = ''
    
            //get index of element that was clicked
            let index = this.dataset.indexNumber
            let project = data.projects[index]

            const projectName = document.createElement('h1')
            projectName.textContent = project.name
            mainSection.append(projectName)

            project.list.forEach(todo => {
                const todoDiv = document.createElement('div')
                todoDiv.className = 'todo'
                todoDiv.textContent = todo.name
                mainSection.append(todoDiv)
            })
            
        }
    }
}