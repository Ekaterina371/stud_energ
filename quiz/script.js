const quizData = [{
question: "How well do you think you sleep?", 
a: "Sleep's my bestie; we're tight.",
b: "I have a complicated relationship with my snooze button.",
c: "Sleep's that friend who always shows up late.",
},
{
question: "How stressed are you?", 
a: "Stress is not on my guest list.",
b: "Stress drops by for tea but overstays its welcome.",
c: "Stress is practically my roommate; never leaves.",
},
{
question: "Describe your workload with food:", 
a: "Workload's like a salad – easy peasy.",
b: "It's a bit spicy, manageable but makes me sweat.",
c: "Workload's a massive feast – overwhelming and endless.",
},
{
question: "How often do you dance or move around?", 
a: "I'm a dance floor legend, even at home.",
b: "Sometimes I dance; it's a bit awkward, but it happens.",
c: "I only dance when my Wi-Fi's strong.",
},
{
question: "What's your deal with water?", 
a: "I drink water like it's magic.",
b: "Water's like that distant cousin – I know it exists.",
c: "I forget to drink water; my body's like, «Hydrate, please!»",
},
{
question: "Rate your social life like popcorn:", 
a: "Popcorn's popping, and so is my social life!",
b: "It pops occasionally, not a big show.",
c: "My popcorn's stuck, and so is my social life.",
},
{
question: "What's your plan with screens?", 
a: "I balance screens and real life like a boss.",
b: "Screens are cool, but I take breaks to avoid drama.",
c: "Screens and I are in a complicated relationship.",
},
{
question: "How do you handle setbacks?", 
a: "Setbacks are my workout; I get stronger.",
b: "I bounce back, but setbacks are like annoying quizzes.",
c: "Setbacks turn me into a sadness burrito.",
},
{
question: "Describe your diet as a superhero:", 
a: "I'm the Healthy Hero, defender of good food!",
b: "I have a buddy named «Occasional Treat».",
c: "My diet is the Lazyburger with Procrastination Fries.",
},
{
question: "If your study space was a movie, what genre?", 
a: "It's a blockbuster – organized and action-packed.",
b: "It's a mix of drama and comedy – some chaos, some order.",
c: "It's a scary movie, and the monster is my mess.",
}
];

const resultVariations = [
    {
        range: [80, 100],
        description: "You're The Energized Scholar! Ready to conquer with enthusiasm.\nYour responses suggest you have abundant energy levels, making you well-prepared to tackle your homework with enthusiasm.",
      
    },
      {
        range: [60, 79],
        description: "You're The Balanced Achiever! Maintaining a good balance.\nYou're on the right path. Some tweaks could further boost your readiness for homework success.",
      },
      {
        range: [40, 59],
        description: "The Motivation Navigator\nNavigating the waters of motivation! Identifying specific areas for improvement could significantly enhance the effectiveness of your homework sessions.",
      },
      {
        range: [20, 39],
        description: "You're The Motivation Navigator! \nEnergy levels seem a bit scattered. Let's explore potential factors affecting your readiness for homework and work together to find effective solutions.",
      },
      {
        range: [0, 19],
        description: "You're The Motivation Detective! Time to uncover reasons for hurdles.\nMotivation seems elusive. Let's put on our detective hats and uncover the reasons behind the challenges you're facing with homework. Together, we'll find solutions.",
      },
  ];
  const quiz = document.getElementById("quiz");
const submitequiz = document.getElementById("submite");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");



const countQuestion =document.getElementById("count-question");
const tottleNumberOfQuestion =document.getElementById("tol-num-que");
const questionNumber =document.getElementById("question-number");
const questionTitle =document.getElementById("question");
const answerLable =document.querySelectorAll(".answer-lable");
const nextQuestionbtn =document.getElementById("next-question-btn");
const allInputs =document.querySelectorAll("input[type='radio']");


let currentQtn = 0;
let answerd = 0;

const loadQuiz = ()=>{
    countQuestion.innerHTML = `${currentQtn + 1}`;
    tottleNumberOfQuestion.innerHTML = quizData.length;
    questionNumber.innerHTML = `${currentQtn + 1}`;
    questionTitle.innerHTML = quizData[currentQtn].question;
    answerLable[0].innerHTML = quizData[currentQtn].a;
    answerLable[1].innerHTML = quizData[currentQtn].b;
    answerLable[2].innerHTML = quizData[currentQtn].c;  
    reset();

    if(currentQtn ==quizData.length-1){
        nextQuestionbtn.style.display="none";
        submitequiz.style.display="block";
    }
}
const reset =()=>{
    allInputs.forEach((allInputs)=>{
        allInputs.checked=false;
    })
}

nextQuestionbtn.addEventListener("click", () => {
    let answer = getSelected();
    if (answer) {
      if (answer === "a") {
        answerd += 10;
      }
      if (answer === "b") {
        answerd += 5;
      }
      if (answer === "c") {
        answerd += 3;
      }
      currentQtn++;
      if (currentQtn < quizData.length) {
        loadQuiz();
      }
    }
  });
  

  submitequiz.addEventListener("click", () => {
    let answer = getSelected();
    if (answer) {
      if (answer === "a") {
        answerd += 10;
      }
      if (answer === "b") {
        answerd += 5;
      }
      if (answer === "c") {
        answerd += 3;
      }
      currentQtn++;
      if (getSelected()) {
        quiz.style.display = "none";
        resultEl.style.display = "block";
  
        // Calculate percentage based on the total possible score
        const totalPossibleScore = quizData.length * 10; // Assuming 10 is the maximum score for each question
        const percentage = Math.round((answerd / totalPossibleScore) * 100);
  
        // Determine result variation based on the percentage
        let resultVariation = resultVariations.find(
          (variation) => percentage >= variation.range[0] && percentage <= variation.range[1]
        );
  
        scoreEl.innerHTML = `Your Motivation Level: ${percentage}% <br/> ${resultVariation.description}`;
       // Update the result GIF dynamically
       const resultGifImg = document.getElementById("resultGifImg");
       if (percentage >= 80) {
           resultGifImg.src = "img/best.gif";
       } else if (percentage >= 60) {
           resultGifImg.src = "img/twix.gif";
       } else if (percentage >= 40) {
           resultGifImg.src = "img/water.gif";
       } else if (percentage >= 20) {
           resultGifImg.src = "img/sleep.gif";
       } else {
           resultGifImg.src = "img/sherlock.gif";
       }
      }
      
    }
  });


  
const getSelected =()=>{
    let answer;
    allInputs.forEach((allInputs)=>{
        if(allInputs.checked){
            answer = allInputs.value;
        }
    });
    return answer;  
}
loadQuiz();
