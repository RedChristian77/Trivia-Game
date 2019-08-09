let questions = [
    question1 = {
        quest : "The armor of Artorias is designed after what Anime?",
        answers : ["Beserk","Claymore","Overlord","Akame Ga Kill"]
    },
    question2 = {
        quest : "What is the name of the starting Location?",
        answers : ["Undead Asylum","Undead Parish","Quelaag's Domain", "Firelink Shrine"]
    },
    question3 = {
        quest : "Who is the daughter of Seath the Scaleless?",
        answers : ["Crossbreed Priscilla","Elizabeth","Quelana of Izalith","Reah of Thorolund"]
    },
    question4 = {
        quest: "Which NPC gives the ring of Favor and Protection (The Fap Ring)",
        answers : ["Knight Lautrec","Solaire of Astoria","Nico of Thorolund","Siegmeyer of Catarina"]
    },
    question5 = {
        quest : "What is the Name of Artoria's companion?",
        answers : ["Great Grey Wolf Silf","Domhnall of Zena","Petrus of Thorolund","Darkstalker Kaeethe"]
    },
    question6 = {
        quest : "What is the only weapon that has a cursed version?",
        answers : ["Greatsword of Artorias","Crystal Greatsword","Dragon Greatsword","Chaos Blade"]
    },
    question7 = {
        quest : "Andre of Astora, Giant Blacksmith, and Vamos and who else is all blacksmiths?",
        answers : ["Rickert of Vinheim", "Gravelord Nito","Big Hat Logan","Hawkeye Gough"]
    },
    question8 = {
        quest : "During the first playthrough its possible to unlock every Miracle but which one?",
        answers : ["Sunlight Spear", "Tranquil walk of Peace","Vow of Silence","Darkmoon Blade"]
    },
    question9 = {
        quest : "What covenent's joining location is Ash Lake?",
        answers : ["Path of the Dragon","Gravelord Servant","Forest Hunter","Chaos Servant"],
    },
    question10 = {
        quest : "Who is the director of Dark Souls?",
        answers : ["Hidetaka Miyazaki","Hideo Kojima","Shigeru Miyamoto","Shenji Mikami"],
    }

]

let answered = false;
let guess = "";
let correctguesses = 0;
let timing = 0;
let i = 0;

//let intervalID = setInterval(function(){
    //timing++;},1000);


//console.log(questions[1].quest);
function rungame(){
let scope = questions;
//For loop to go through each SET of questions
let clocktimer = setInterval(function(){
    // reset the trivia container and adding the question
document.getElementById("triviacontainer").innerHTML = "";
let questionEl = document.createElement("h1");
questionEl.innerHTML = scope[i].quest;
questionEl.setAttribute("class","trivia");
document.getElementById("triviacontainer").append(questionEl);

console.log(scope[0].answers[0]);

let testvalue = scope[i].answers[0];
let l = Math.floor(Math.random()*4);
//randomly places the answers and questions
for(k=0;k<scope[i].answers.length;k++){
l++;
if(l>3){
    l=0;
}
let answerButton = document.createElement("button");
answerButton.innerText = scope[i].answers[l];
answerButton.setAttribute("class","buttons");
answerButton.setAttribute("data-answer",scope[i].answers[l]);
document.getElementById("triviacontainer").append(answerButton);
}
//giving buttons values
document.querySelectorAll(".buttons").forEach(function (node) {
    node.addEventListener("click",function() {
        guess = node.getAttribute("data-answer");
        answered = true;
        document.querySelectorAll(".buttons").forEach(function (beta) {
            beta.disabled;
        })
        if(guess === testvalue && answered === true){
            let correctanswer = document.createElement("h1");
            correctanswer.innerHTML = "Correct Answer";
            document.getElementById("triviacontainer").append(correctanswer);
            correctguesses++;
            i++
         }
         else if(answered === true){
             let wronganswer = document.createElement("h1");
             wronganswer.innerhtml = "The Correct answer is " + scope[i].answers[1];
             document.getElementById("triviacontainer").append(wronganswer);
             i++;
         }
    })
})
},13000)
//After all questions are complete
document.getElementById("triviacontainer").innerHTML= "";
let finalscore = document.createElement("h1");
finalscore.setAttribute("class","trivia");
finalscore.innerHTML = "Your total Score is: <br>"+correctguesses+" Out of 10";
};