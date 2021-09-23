const quizData = [
    {
        question : 'Who is the best',
        a : 'Steve Jobs',
        b : 'David Bacham',
        c : 'Park Ju Sung',
        d : 'Sooyoung',
        correct : 'a'
    },
    {
        question : 'Who is the most old?',
        a : 'Green Man',
        b : 'Blue hat man',
        c : 'Lee jae young',
        d : 'Park Soo Jin',
        correct : 'b'
    },
    {
        question : 'Which company the highest value?',
        a : 'Samsung',
        b : 'Google',
        c : 'Facebook',
        d : 'Apple',
        correct : 'd'
    },
    {
        question : 'Which country you live in?',
        a : 'Korea',
        b : 'Japan',
        c : 'Taiwan',
        d : 'US',
        correct : 'a'
    }
]

const question_value=document.querySelector('#question');
const a_value = document.querySelector('#a_label');
const b_value = document.querySelector('#b_label');
const c_value = document.querySelector('#c_label');
const d_value = document.querySelector('#d_label');
const nextButton = document.querySelector('#button');
const quiz_ = document.querySelector('.quiz');
var answers = document.getElementsByName('radio');
var currentQuize = 0;
var score = 0;


//initial call;
loadQuiz();

function loadQuiz(){
    question_value.innerText = quizData[currentQuize].question;
    a_value.innerText=quizData[currentQuize].a;
    b_value.innerText=quizData[currentQuize].b;
    c_value.innerText=quizData[currentQuize].c;
    d_value.innerText=quizData[currentQuize].d;
    delSelected();
}

function delSelected(){
    answers.forEach((answer)=>{
        if(answer.checked){
            answer.checked = false;
        }else{
            answer.checked = answer.checked;
        }
    }) 
}
function getSelected(){
    let answer = undefined;
    answers.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        } 
        
    });
    return answer;
}

nextButton.addEventListener('click', ()=>{   
    //get input.id(quizData.correct)
    const ans = getSelected();
    if(ans){
        if(ans===quizData[currentQuize].correct){
            console.log(ans);
            score++;
        }
        currentQuize++;
        if(currentQuize<quizData.length){
            loadQuiz();
        }else{
            quiz_.innerHTML = `<h2> you finished<br>
            Score : ${score} </h2> 
            <button id='reload_button' onclick="location.reload();">Reload</button>`;
        }
    } 
})
