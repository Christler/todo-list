export default class ProjectList {

    constructor(){
        this.projects = []
    }

    addProject(project){
        this.projects.push(project)
    }

    getProjects(){
        return this.projects
    }

    getProjectIndex(selectedProject){
        return this.projects.findIndex(p => p === selectedProject)
    }

    deleteProject(index){
        this.projects.splice(index, 1)
    }
}