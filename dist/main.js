(()=>{"use strict";const e=function(e){const t=document.createElement("button");t.classList.add("remove-btn"),t.textContent="R",function(e,t){t.addEventListener("click",(()=>{e.remove()}))}(e,t),e.appendChild(t)};let t=[{name:"All tasks Project",id:0,todoList:[]}],n=1;function d(){document.getElementById("projectNameInput").value="",document.getElementById("projectForm").classList.add("hidden")}function o(e){const n=t[e].name;document.querySelector(".project-name").textContent=n}function c(){document.getElementById("todoContainer").innerHTML=""}function l(e){e.preventDefault();const t=document.getElementById("newTodoForm");document.getElementById("todoTitleInput").value="",document.getElementById("todoDescInput").value="",document.getElementById("todoDateInput").value="",t.classList.add("hidden")}function m(t,n,d){const o=document.getElementById("todoContainer"),c=document.createElement("div"),l=document.createElement("input");l.type="checkbox";const m=document.createElement("h2"),u=document.createElement("p"),i=document.createElement("div");m.textContent=t,u.textContent=n,i.textContent=d,c.appendChild(l),c.appendChild(m),c.appendChild(u),c.appendChild(i),e(c),o.appendChild(c)}document.getElementById("newTodo").addEventListener("click",(function(){document.getElementById("newTodoForm").classList.remove("hidden")})),document.querySelector(".todoCancelBtn").addEventListener("click",(e=>{l(e)})),document.querySelector(".todoAddBtn").addEventListener("click",(e=>{""!=document.getElementById("todoTitleInput").value?(function(e){e.preventDefault();const n=document.getElementById("todoTitleInput").value,d=document.getElementById("todoDescInput").value,c=document.getElementById("todoDateInput").value,l=((e,t,n)=>({title:e,desc:t,date:n}))(n,d,c),u=document.querySelector(".project-name").textContent,i=t.find((e=>e.name==u)),a=t.indexOf(i);-1!==a?(t[a].todoList.push(l),m(n,d,c)):(t[0].todoList.push(l),console.log(t[0].todoList),o(0),m(n,d,c))}(e),l(e)):alert("You should name it!")})),document.getElementById("newProject").addEventListener("click",(function(){document.getElementById("projectForm").classList.remove("hidden")})),document.getElementById("submitProjectBtn").addEventListener("click",(l=>{l.preventDefault(),""!=document.getElementById("projectNameInput").value?(function(){const d=document.getElementById("projectNameInput").value,l=function(e,t){return{name:e,id:t,todoList:[]}}(d,n);t.push(l),function(d){const l=document.createElement("div");l.classList.add("project-child"),l.setAttribute("id",`${n}`);const m=document.createElement("button");m.setAttribute("id","nameBtn"),m.textContent=d,l.appendChild(m),e(l),m.addEventListener("click",(n=>{const d=n.target.parentNode.id;o(d),function(n){c();for(let d=0;d<t[n].todoList.length;d++){const o=document.createElement("div"),c=document.createElement("input");c.type="checkbox";const l=document.createElement("h2"),m=document.createElement("p"),u=document.createElement("div");l.textContent=t[n].todoList[d].title,m.textContent=t[n].todoList[d].desc,u.textContent=t[n].todoList[d].dueDate,o.appendChild(c),o.appendChild(l),o.appendChild(m),o.appendChild(u),e(o),todoContainer.appendChild(o)}}(d)})),document.getElementById("projectsContainer").appendChild(l)}(d),n++}(),d()):alert("You should name it!")})),document.getElementById("cancelProjectBtn").addEventListener("click",(e=>{e.preventDefault(),d()})),document.getElementById("allTodos").addEventListener("click",(()=>{document.querySelector(".project-name").textContent="All Tasks:",c(),t.forEach((t=>{t.todoList.forEach((t=>{const n=document.createElement("div"),d=document.createElement("input");d.type="checkbox";const o=document.createElement("h2"),c=document.createElement("p"),l=document.createElement("div");o.textContent=t.title,c.textContent=t.desc,l.textContent=t.dueDate,n.appendChild(d),n.appendChild(o),n.appendChild(c),n.appendChild(l),e(n),todoContainer.appendChild(n)}))}))}))})();