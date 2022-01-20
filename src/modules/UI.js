// import ProjectList from "./ProjectList";
// import Project from "./Project";
// import Todo from "./Todo";
import TempData from "./TempDataStore"

export default class UI {

    static loadPage(){

        //get data from temp data store
        const data = TempData()
        displayProjects()
        
        const content = document.querySelector('.main')
        content.textContent = `Project`
        
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

        function displayTodos(e){
            let index = e.srcElement.dataset.indexNumber
            let project = data.projects[index]
        }
    }
}