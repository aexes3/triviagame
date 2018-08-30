$(document).ready(function(){


let count = 1;

let questions = {
    1:{
    question:'What does HTML stand for in a website?',
    answers:['Hypertranscript Mark Language','Hypertext Markup Language','Hyerlink and Text Markup Language','Home Tools Master Listener'],
    correct:'Hypertext Markup Language',
    right:'Good job! Correct!',
    wrong: 'Wrong',
    imageUrl:'../images/.jpg'
},
    2:{
    question:'What is SSD?',
    answers:['Solid State Data','Solid State Drive','Social Security Disibility','Solid State Disk'],
    correct:'Solid State Drive',
    right:'Good job! Correct!',
    wrong: 'Wrong',
    imageUrl:'../images/.jpg'  
},
    3:{
        question:'How many Kilobytes are in a Terabyte',
        answers:['1e^9','1e^12','10e^6','1000'],
        correct:'1e^9',
        right:'Good job! Correct!',
        wrong: 'Wrong',
        imageUrl:'../images/.jpg' 
    }
}


//-----------functions-------------
let emptyQuestions = () => $(".questionContainer").empty();

let start = function(){
    //when the button is clicked, start Trivia Game
$('.button').on('click', function(){
    //clears out current game, if any
    emptyQuestions()
    //calling questions fuction
    getQuestions();
});
}


let getQuestions = function(){
//TODO make timer work:
    //timerOnStart();
    //get questions
    let newQuestion = questions[count]['question'];
    //adds div under --
    let newDiv = $('<div class="question">');
    //adds text to question
    newDiv.html(newQuestion);
    //sends text to DOM
    $('.questionContainer').append(newDiv);
    fetchAnswers();
    console.log(newQuestion);   
}


function checkAnswer(e){
    answer = e.target.innerHTML
    console.log(e.target.innerHTML);
    console.log(count)

    console.log('true?', answer === questions[count].correct )
}


let fetchAnswers = function(){
    let newAnswer = questions[count]['answers'].length;
    for(let i = 0; i < newAnswer; i++){
        //gets answer from objects
        let answers = questions[count]['answers'][i];
        //make button for answers to go into under the start button
        let ansBtn = $('<button class="answers">');
        ansBtn.click(checkAnswer)
        //ansBtn.attr('data-type',answers);
        //adding text to new buttons
        ansBtn.html(answers);
        $('.questionContainer').append(ansBtn);

        console.log(newAnswer);
    }

}




//Clears -- in DOM
$('.clearButton').on('click', function(){
    emptyQuestions()
});

start();




});