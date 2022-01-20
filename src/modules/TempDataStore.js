import ProjectList from "./ProjectList";
import Project from "./Project";
import Todo from "./Todo";

export default function TempData() {

    const projectList = new ProjectList()

    const project1 = new Project('Grocery Store')
    project1.addTodo(new Todo('Milk'))
    project1.addTodo(new Todo('Cheese'))
    project1.addTodo(new Todo('Bread'))
    project1.addTodo(new Todo('Beer'))

    const project2 = new Project('Home Project')
    project2.addTodo(new Todo('Paint Cabinets'))
    project2.addTodo(new Todo('Tile Backsplash'))
    project2.addTodo(new Todo('New Lighting'))

    const project3 = new Project('Workout')
    project3.addTodo(new Todo('Chest'))
    project3.addTodo(new Todo('Back'))
    project3.addTodo(new Todo('Legs'))
    project3.addTodo(new Todo('Arms'))

    projectList.addProject(project1)
    projectList.addProject(project2)
    projectList.addProject(project3)

    return projectList
}