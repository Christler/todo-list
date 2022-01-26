(()=>{"use strict";class e{constructor(e){this.name=e,this.todos=[]}addTodo(e){this.todos.push(e)}}class t{constructor(){this.projects=[]}addProject(e){this.projects.push(e)}getProjects(){return this.projects}}class o{constructor(e){this.name=e,this.complete=!1}getName(){return this.name}setName(e){this.name=e}getComplete(){return this.complete}setComplete(){this.complete?this.complete=!1:this.complete=!0}}(class{static loadPage(){const n=function(){const n=new t,d=new e("Grocery Store");d.addTodo(new o("Milk")),d.addTodo(new o("Cheese")),d.addTodo(new o("Bread")),d.addTodo(new o("Beer"));const c=new e("Home Project");c.addTodo(new o("Paint Cabinets")),c.addTodo(new o("Tile Backsplash")),c.addTodo(new o("New Lighting"));const s=new e("Workout");return s.addTodo(new o("Chest")),s.addTodo(new o("Back")),s.addTodo(new o("Legs")),s.addTodo(new o("Arms")),n.addProject(d),n.addProject(c),n.addProject(s),n}();function d(){const e=document.querySelector(".projects");e.textContent="",n.projects.forEach(((t,o)=>{let n=document.createElement("p");n.className="project",n.dataset.indexNumber=o,n.textContent=t.name,n.addEventListener("click",c),e.append(n)}))}function c(){const e=document.querySelector(".main");e.textContent="";let t=this.dataset.indexNumber,o=n.projects[t];const d=document.createElement("h1");d.textContent=o.name,e.append(d),o.todos.forEach((t=>{const o=document.createElement("div");o.className="todo",o.textContent=t.name,e.append(o)}))}d(),document.querySelector(".newProjectBtn").addEventListener("click",(function(){let t=prompt("Enter project name");n.projects.push(new e(t)),d()}))}}).loadPage()})();