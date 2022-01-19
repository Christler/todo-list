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

}