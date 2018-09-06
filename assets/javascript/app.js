
    let count = 1;
    let triviaTime = 0;
    let rightCount = 0;
    let wrongCount = 0;
    let timer = "";

    let questions = {
        1: {
            question: 'What does HTML stand for in a website?',
            answers: ['Hypertranscript Mark Language', 'Hypertext Markup Language', 'Hyerlink and Text Markup Language', 'Home Tools Master Listener'],
            correct: 'Hypertext Markup Language',
            right: 'Good job! Correct!',
            wrong: 'Wrong Choice',
            imageUrl: 'assets/images/html.JPG'
        },
        2: {
            question: 'What console comands deletes a file?',
            answers: ['rm', 'rmdir', 'del', 'rmdel'],
            correct: 'rm',
            right: 'Good job! Correct!',
            wrong: 'Wrong Choice',
            imageUrl: 'assets/images/rm.JPG',
        },
        3: {
            question: 'How many Kilobytes are in a Terabyte',
            answers: ['1e^9', '1e^12', '10e^6', '1000'],
            correct: '1e^9',
            right: 'Good job! Correct!',
            wrong: 'Wrong Choice',
            imageUrl: 'assets/images/bytes.JPG'
        },
        4: {
            question: 'What types of paths allow us to link something to our current document?',
            answers: ['Concatenate', 'Similar', 'Absolute', 'Relative'],
            correct: 'Relative',
            right: 'Good job! Correct!',
            wrong: 'Wrong Choice',
            imageUrl: 'assets/images/relative.JPG'
        },
        5: {
            question: 'Which one is not a traditional CSS display proerty?',
            answers: ['Block', 'Inline-Block', 'Flex-Block', 'Inline'],
            correct: 'Flex-Block',
            right: 'Good job! Correct!',
            wrong: 'Wrong Choice',
            imageUrl: 'assets/images/flex.JPG'
        },        
        6: {
            question: 'What is a quick expression used to print content to the debugger?',
            answers: ['document.querySelector()', 'console.log()', 'console.dir()', 'document.write()'],
            correct: 'console.log()',
            right: 'Good job! Correct!',
            wrong: 'Wrong Choice',
            imageUrl: 'assets/images/console.JPG'
        },       
         7: {
            question: 'What methods is used to add itmes to the end of the array?',
            answers: ['.end()', '.pull()', '.push()', '.unshift()'],
            correct: '.push()',
            right: 'Good job! Correct!',
            wrong: 'Wrong Choice',
            imageUrl: 'assets/images/push.JPG'
        },        
        8: {
            question: 'Additional Functions Can Access Global Functions?',
            answers: ['True', 'False'],
            correct: 'True',
            right: 'Good job! Correct!',
            wrong: 'Wrong Choice',
            imageUrl: 'assets/images/true.JPG'
        },
        9: {
            question: 'Global Functions Can Access All Functions?',
            answers: ['True', 'False'],
            correct: 'False',
            right: 'Good job! Correct!',
            wrong: 'Wrong Choice',
            imageUrl: 'assets/images/false.JPG'
        },
        10: {
            question: 'What do GoogleMaps, Twitter, Facebook, Amazon have in common?',
            answers: ['Free Service', 'Server Hosting Platform', 'Social Networking', 'Application Programming Interface'],
            correct: 'Application Programming Interface',
            right: 'Good job! Correct!',
            wrong: 'Wrong Choice',
            imageUrl: 'assets/images/api.JPG'
        },
    }


    //-----------functions-------------
    let emptyQuestions = () => $(".questionContainer").empty();

    let start = function () {
        //when the button is clicked, start Trivia Game
        $('.startButton').on('click', function () {
            //clears out current game, if any
            emptyQuestions()
            //calling questions fuction
            getQuestions();
            //start button cannot be clicked a second time
            $('.startButton').off('click');
        });
    }


    let getQuestions = function () {
        timerOnStart();
        //get questions
        let newQuestion = questions[count]['question'];
        //adds div under to questionContainer
        let newDiv = $('<div class="alert alert-dark question">');
        //adds text to question
        newDiv.html(newQuestion);
        //sends text to DOM
        $('.questionContainer').append(newDiv);
        fetchAnswers();
        console.log(newQuestion);
    }


    let fetchAnswers = function () {
        let newAnswer = questions[count]['answers'].length;
        for (let i = 0; i < newAnswer; i++) {
            //gets answer from objects
            let answers = questions[count]['answers'][i];
            //make button for answers to go into under the start button
            let ansBtn = $('<div class="answers alert alert-primary btn" type="button">');
            ansBtn.click(checkAnswer)
            //add attribute to div
            ansBtn.attr('data-type', answers);
            //adding text to answers buttons
            ansBtn.html(answers);
            //placing the answers selctions in the questionContainer Div
            $('.questionContainer').append(ansBtn);

            console.log(newAnswer);
        }

    }


    let checkAnswer = function () {
        let guess = $(this).data('type');
        let correctAnswer = questions[count]["correct"];
        let correctImg = questions[count]["imageUrl"];
        let right = questions[count]["correct"];
        let wrong = questions[count]["wrong"];
        console.log(count);

        if (guess === correctAnswer) {
            //adding to correct counts
            rightCount++;
            //clears out questionContainer
            $('.questionContainer').empty();
             //correct image appears when correct
             let newImg = $('<img>');
             newImg.attr('src',correctImg);
             $('.questionContainer').append(newImg);
             console.log(newImg);

            let newDiv = $('<div class="btn btn-success rightAnswer">');
            newDiv.text(right);
            $('.questionContainer').append(newDiv);

            //stops timer
            clearInterval(timer)
            //adds 1 to question count - moves to next question
            count++;
            if (count <= 10) {
                setTimeout(
                    function () {
                        $('.questionContainer').empty();
                        getQuestions();
                    }, 3000);
            }
            else {
                $('.questionContainer').empty();
                //  correct image appears when correct
                 let newImg = $('<img>');
                 newImg.attr('src',correctImg);
                 $('.questionContainer').append(newImg);
                let newDiv = $('<div class="btn btn-success rightAnswer">');
                //adds Good job! Correct! text to div
                newDiv.text(right);
                //adds answer to dom
                $('.questionContainer').append(newDiv);
                //stops time
                clearInterval(timer);
                //reset time
                setTimeout(gameOver, 3000);
            }
        }
        else {
            //adding to wrong guesses
            wrongCount++;
            //clearing out questionContainer
            $('.questionContainer').empty;
            //  correct image appears when correct
             let newImg = $('<img>');
             newImg.attr('src',correctImg);
             $('.questionContainer').append(newImg);
            let newDiv = $('<div class="btn btn-danger wrongAnswer">');
            //displays Wrong Choice from wrong:
            newDiv.text(wrong);
            $('.questionContainer').append(newDiv);
            clearInterval(timer);
            count++;

            if (count <= 10) {
                setTimeout(
                    function () {
                        $('.questionContainer').empty();
                        getQuestions();
                    }, 3000);
            }
            else {
                $('.questionContainer').empty();
                //  correct image appears when correct
                 let newImg = $('<img>');
                 newImg.attr('src',correctImg);
                 $('.questionContainer').append(newImg);
                let newDiv = ('<div class="btn btn-danger wrongAnswer">')
                //adding wrong section from object
                newDiv.text(wrong);
                //adding questions to dom
                $('.questionContainer').append(newDiv);
                //Stoping timer
                clearInterval(timer);
                //resetting timer
                setTimeout(gameOver, 3000);
            }
        }
    }

let timerOnStart = function(){
    $('.timerSection').empty();
    //Sets time to 10
	triviaTime = 100;
	//Progress Bar
	let timeTag = $('<div class="time progress">');
	let progressBar = $('<div class="progress-bar">');
	progressBar.width(triviaTime + '%');

	$('.timerSection').append(timeTag);
	$('.time').append(progressBar);	
	//Decrements Time
	timer = setInterval(timeDecrement,100);
}


let timeDecrement = function(){ 
	//Progress bar decrement
	$('.progress-bar').width(triviaTime + '%');
	triviaTime--;
	//if time gets to 0
	if(triviaTime === -10){
		userAnswer = false;
		//Clears Time
		clearInterval(timer);
		checkAnswer();
	}
	
}


let gameOver = function(){
	//Remove everything in trivia section
	$('.questionContainer').empty();
	//Remove everthing in timer section
	$('.timerSection').empty();
	let scoreDiv = $('<div>');
	scoreDiv.addClass('score');
	scoreDiv.html('Correct: ' + rightCount + '<br>' + 'Wrong: ' + wrongCount);
	$('.triviaGame').append(scoreDiv);
	//Assign new div element to new Div
	let newDiv = $('<div>');
	//add class to new Div
	newDiv.addClass('gameOver');
	//add game over text
	newDiv.text('Game Over! Play Again ?');
	//Append game over text to DOM
	$('.triviaGame').append(newDiv);
	//Reset all value
	triviaTime = 100;
	count = 1;
	rightCount = 0;
	wrongCount = 0;
}


    //Create ResetButton
    $('.clearButton').on('click', function () {
        emptyQuestions();
        $('.score').remove()
        $('.gameOver').remove()
        clearInterval(timer);
        count = 1;
        rightCount = 0;
        wrongCount = 0;
        start();
    });

    start();
