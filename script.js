// 🔥 SMOOTH PAGE TRANSITION
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        let url = this.href;

        // fade out
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = url;
        }, 250);
    });
});


// 🔥 PAGE LOAD FADE-IN
window.onload = function(){
    document.body.style.opacity = "1";
};


/* ================= QUIZ LOGIC ================= */

let questions = [

{q:"Binary Search complexity?",options:["n","log n","n^2","1"],ans:"log n"},

{q:"What is a tree?",options:["Graph with cycles","Connected acyclic graph","Disconnected graph","Directed graph"],ans:"Connected acyclic graph"},

{q:"Maximum edges in a tree with n nodes?",options:["n","n-1","n+1","n^2"],ans:"n-1"},

{q:"Root node in a tree is?",options:["Leaf node","Topmost node","Bottom node","Middle node"],ans:"Topmost node"},

{q:"Leaf node means?",options:["Node with no children","Node with 2 children","Root node","Internal node"],ans:"Node with no children"},

{q:"Degree of a node is?",options:["Number of edges","Number of children","Height","Level"],ans:"Number of children"},

{q:"DFS stands for?",options:["Data First Search","Depth First Search","Double First Search","Direct First Search"],ans:"Depth First Search"},

{q:"BFS uses which data structure?",options:["Stack","Queue","Array","Tree"],ans:"Queue"},

{q:"DFS uses which data structure?",options:["Queue","Stack","Heap","Graph"],ans:"Stack"},

{q:"Shortest path in unweighted graph?",options:["DFS","BFS","Dijkstra","Kruskal"],ans:"BFS"},

{q:"Cycle detection in graph uses?",options:["DFS","BFS","Both","None"],ans:"DFS"},

{q:"Dijkstra algorithm is used for?",options:["Sorting","Shortest path","Searching","Traversal"],ans:"Shortest path"},

{q:"Minimum Spanning Tree algorithms?",options:["BFS & DFS","Kruskal & Prim","Merge & Quick","Heap & Stack"],ans:"Kruskal & Prim"},

{q:"Graph with direction is called?",options:["Undirected","Directed","Cyclic","Tree"],ans:"Directed"},

{q:"Complete binary tree means?",options:["All nodes full","All levels filled except last","Only root","Only leaf nodes"],ans:"All levels filled except last"}

];

let i=0,score=0,user="";

function startQuiz(){
user=document.getElementById("username").value;

if(user===""){
alert("Enter name");
return;
}

document.getElementById("quizBox").style.display="block";
load();
}

function load(){
document.getElementById("question").innerText=questions[i].q;

let opt="";
questions[i].options.forEach(o=>{
opt+=`<div class="option" onclick="check('${o}')">${o}</div>`;
});

document.getElementById("options").innerHTML=opt;
}

function check(o){
if(o==questions[i].ans){
score++;
document.getElementById("result").innerText="Correct";
}else{
document.getElementById("result").innerText="Wrong";
}
}

function nextQuestion(){
i++;
document.getElementById("score").innerText=score;

if(i<questions.length){
load();
}else{
save();
alert("Quiz Finished");
}
}

function save(){
let s=JSON.parse(localStorage.getItem("scores"))||[];
s.push({name:user,score:score});
localStorage.setItem("scores",JSON.stringify(s));
}
/* 🌙 DARK MODE TOGGLE */
function toggleDark(){
    document.body.classList.toggle("dark");
}

/* ACTIVE SIDEBAR */
let links = document.querySelectorAll(".sidebar a");
links.forEach(link=>{
    if(link.href === window.location.href){
        link.classList.add("active");
    }
});

/* ⏳ LOADER */
window.addEventListener("load", ()=>{
    setTimeout(()=>{
        document.getElementById("loader").style.display = "none";
    }, 500);
});

/* 🧪 QUIZ IMPROVEMENT */
let locked = false;

function check(o){
if(locked) return;

locked = true;

let correctAns = questions[i].ans;

let options = document.querySelectorAll(".option");

options.forEach(opt=>{
    if(opt.innerText === correctAns){
        opt.classList.add("correct");
    }
    if(opt.innerText === o && o !== correctAns){
        opt.classList.add("wrong");
    }
});

if(o === correctAns){
    score++;
    document.getElementById("result").innerText="Correct";
}else{
    document.getElementById("result").innerText="Wrong";
}
}

/* RESET LOCK NEXT QUESTION */
function nextQuestion(){
i++;
locked = false;

document.getElementById("score").innerText=score;

if(i<questions.length){
load();
}else{
save();
alert("Quiz Finished");
}
}