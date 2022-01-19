import Todo from './modules/Todo.js'
import Project from './modules/Project.js'
import ProjectList from './modules/ProjectList.js'

const projectList = new ProjectList()

const project1 = new Project("Test Project")
const project2 = new Project("Test Project 2")
const project3 = new Project("Test Project 3")

projectList.addProject(project1)
projectList.addProject(project2)
projectList.addProject(project3)

const todo1 = new Todo("Test1")
const todo2 = new Todo("Test2")
const todo3 = new Todo("Test3")

project1.addTodo(todo1)
project1.addTodo(todo2)
project1.addTodo(todo3)

let projects = projectList.getProjects()

projects.forEach(project => {
    document.body.append(project.name)
    let todos = project.list 
    todos.forEach(todo => document.body.append(`${todo.name}`))
})

console.log(projectList.getProjects())