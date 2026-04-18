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
{q:"Fibonacci(5)?",options:["3","5","8","13"],ans:"5"},
{q:"Max of [2,7,4]?",options:["2","4","7","9"],ans:"7"}
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