import ProjectList from "./ProjectList";
import Project from "./Project";
import Todo from "./Todo";

export default class UI {

    static loadPage(){
        const content = document.getElementById('content')
        content.innerHTML = `<h1>Hello World</h1>`
    }
}