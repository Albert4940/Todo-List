(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),o=(a(30),a(31),a(24)),s=a(7),m=a(8),i=a(10),u=a(9),d=a(11),p=a(6),f=a(12),b=function(e){var t=e.onDeleteCompleted;return l.a.createElement("footer",{className:"d-flex justify-content-between bg-secondary p-3",id:"mainFooter"},l.a.createElement("div",{className:"btn-group"},l.a.createElement(f.b,{to:"/",className:"btn btn-outline-dark bg-light",exact:!0},l.a.createElement(p.b,null)),l.a.createElement(f.b,{to:"/completed",className:"btn btn-outline-dark bg-light"},l.a.createElement(p.a,null)),l.a.createElement(f.b,{to:"/add-task",className:"btn btn-outline-dark bg-light",exact:!0},l.a.createElement(p.c,null))),l.a.createElement("button",{className:"btn btn-outline-dark bg-light",onClick:t},l.a.createElement(p.e,null)))},h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={completed:a.props.task.completed},a.toggleCompleted=function(){a.setState(function(e){return{completed:!e.completed}}),a.props.onToggleCompleted(a.props.task.id)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("li",{className:"list-group-item d-flex align-tiems-center "+(this.state.completed?"bg-success":null)},this.props.task.name,l.a.createElement("button",{className:"btn btn-sm ml-auto "+(this.state.completed?"btn-success":"btn-outline-success"),onClick:function(){return e.toggleCompleted()}},"\u2713"))}}]),t}(l.a.Component),g=function(e){var t,a=e.tasks,n=e.match,r=e.onToggleCompleted;switch(n.params.filter){case"completed":t=a.filter(function(e){return e.completed});break;default:t=a}return 0===t.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"m-3"},"Liste de t\xe2ches"),l.a.createElement("ul",{className:"list-group m-3"},l.a.createElement("li",{className:"list-group m-3"},"Aucune tache a afficher"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"m-3"},"Liste de t\xe2ches"),l.a.createElement("ul",{className:"list-group m-3"},t.map(function(e){return l.a.createElement(h,{task:e,key:e.id,onToggleCompleted:r})})))},E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handleSubmit=function(e){e.preventDefault(),a.props.onAddTask(a.newTask.value),a.props.history.push("/")},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("section",null,l.a.createElement("h1",{className:"m-3"},"Nouvelle t\xe2che"),l.a.createElement("div",{className:"card mx-3"},l.a.createElement("form",{className:"card-body",onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{form:"taskName"},"Nom de la t\xe2che"),l.a.createElement("input",{type:"text",className:"form-control",name:"taskName",id:"taskName",required:!0,ref:function(t){return e.newTask=t}})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Cr\xe9er"))))}}]),t}(l.a.Component),k=a(5),v=[{id:"jsertu7a",name:"Ranger la vaisselle",completed:!1},{id:"jseruo7l",name:"R\xe9pondre appel d'offres",completed:!1},{id:"jseruy2q",name:"Signer contrat",completed:!1},{id:"jserv4sw",name:"Aspirer le salon",completed:!1}],N=a(23),j=a.n(N),y=function(){return l.a.createElement("div",{className:"fetching"},l.a.createElement(p.d,{className:"spinner"}))},C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={tasks:[],fetching:!0},a.onToggleCompleted=function(e){var t=a.state.tasks.find(function(t){return t.id===e});t.completed=!t.completed,a.setState(function(a){a.tasks.map(function(a){return a.id===e?t:a})})},a.onAddTask=function(e){var t={id:j()(),name:e,completed:!1};a.setState(function(e){return{tasks:[].concat(Object(o.a)(e.tasks),[t])}})},a.onDeleteCompleted=function(){a.setState(function(e){return{tasks:e.tasks.filter(function(e){return!e.completed})}})},a.componentDidMount=function(){var e=Math.floor(5e3*Math.random());setTimeout(function(){a.setState({fetching:!1,tasks:v})},e)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("section",{id:"todo"},this.state.fetching?l.a.createElement(y,null):null,l.a.createElement(f.a,null,l.a.createElement(k.c,null,l.a.createElement(k.a,{path:"/add-task",render:function(t){return l.a.createElement(E,Object.assign({},t,{onAddTask:e.onAddTask}))}}),l.a.createElement(k.a,{path:"/:filter?",render:function(t){return l.a.createElement(g,Object.assign({},t,{tasks:e.state.tasks,onToggleCompleted:e.onToggleCompleted}))}})),l.a.createElement(b,{onDeleteCompleted:this.onDeleteCompleted})))}}]),t}(l.a.Component);c.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.700f7513.chunk.js.map