var CurrentQuestion = 0;

const Questions = [
    ['Pergunta1', 'RespostaCerta', 'RespostaErrada1', 'RespostaErrada2', 'RespostaErrada3', 'RespostaErrada4', 'RespostaErrada5'],
    ['Pergunta2', 'RespostaCerta', 'RespostaErrada1', 'RespostaErrada2', 'RespostaErrada3', 'RespostaErrada4', 'RespostaErrada5'],
    ['Pergunta3', 'RespostaCerta', 'RespostaErrada1', 'RespostaErrada2', 'RespostaErrada3', 'RespostaErrada4', 'RespostaErrada5'],
    ['Pergunta4', 'RespostaCerta', 'RespostaErrada1', 'RespostaErrada2', 'RespostaErrada3', 'RespostaErrada4', 'RespostaErrada5'],
    ['Pergunta5', 'RespostaCerta', 'RespostaErrada1', 'RespostaErrada2', 'RespostaErrada3', 'RespostaErrada4', 'RespostaErrada5'],
    ['Pergunta6', 'RespostaCerta', 'RespostaErrada1', 'RespostaErrada2', 'RespostaErrada3', 'RespostaErrada4', 'RespostaErrada5'],
    ['Pergunta7', 'RespostaCerta', 'RespostaErrada1', 'RespostaErrada2', 'RespostaErrada3', 'RespostaErrada4', 'RespostaErrada5']
]

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }

    return array;
}

function QuestionLoaderHandler(NextQuestion) {
    NextQuestion = NextQuestion || false;

    var DOM = {
        QuestionTitle: document.getElementsByClassName('QuestionTitle')[0],
        QuestionAnswer1: document.getElementById('Answer1'),
        QuestionAnswer2: document.getElementById('Answer2'),
        QuestionAnswer3: document.getElementById('Answer3'),
        QuestionAnswer4: document.getElementById('Answer4'),
        QuestionAnswer5: document.getElementById('Answer5'),
        QuestionAnswer6: document.getElementById('Answer6'),
        WinScreen: document.getElementsByClassName('Win')[0],
        MainMenuScreen: document.getElementsByClassName('MainMenu')[0],
        QuestionsScreen: document.getElementsByClassName('Questions')[0],
    }

    DOM.MainMenuScreen.style.display = 'none';
    DOM.QuestionsScreen.style.display = 'block';

    if (NextQuestion) {
        CurrentQuestion += 1;
    }

    if (CurrentQuestion >= Questions.length) {
        DOM.MainMenuScreen.style.display = 'none';
        DOM.QuestionsScreen.style.display = 'none';
        document.getElementsByClassName('Correct')[0].style.display = 'none';
        document.getElementsByClassName('Failed')[0].style.display = 'none';
        return DOM.WinScreen.style.display = 'block';
    }

    var questionOrder = [1,2,3,4,5,6];

    questionOrder = shuffle(questionOrder);

    var CorrectAnswer = questionOrder.indexOf(1);
    
    document.getElementsByClassName('Correct')[0].style.display = 'none';
    document.getElementsByClassName('Failed')[0].style.display = 'none';
    DOM.QuestionAnswer1.className = '';
    DOM.QuestionAnswer2.className = '';
    DOM.QuestionAnswer3.className = '';
    DOM.QuestionAnswer4.className = '';
    DOM.QuestionAnswer5.className = '';
    DOM.QuestionAnswer6.className = '';

    document.getElementById('Answer'+(CorrectAnswer+1)).className='CA';

    DOM.QuestionTitle.innerHTML = Questions[CurrentQuestion][0];
    DOM.QuestionAnswer1.innerHTML = Questions[CurrentQuestion][questionOrder[0]];
    DOM.QuestionAnswer2.innerHTML = Questions[CurrentQuestion][questionOrder[1]];
    DOM.QuestionAnswer3.innerHTML = Questions[CurrentQuestion][questionOrder[2]];
    DOM.QuestionAnswer4.innerHTML = Questions[CurrentQuestion][questionOrder[3]];
    DOM.QuestionAnswer5.innerHTML = Questions[CurrentQuestion][questionOrder[4]];
    DOM.QuestionAnswer6.innerHTML = Questions[CurrentQuestion][questionOrder[5]];
}

function verifyResponse(id) {
    if(document.getElementById('Answer'+id).className !== 'CA') {
        //The user click in a wrong answer
        document.getElementsByClassName('MainMenu')[0].style.display = 'none';
        document.getElementsByClassName('Questions')[0].style.display = 'none';
        document.getElementsByClassName('Failed')[0].style.display = 'block';
    } else {
        //The user click in a correct answer
        document.getElementsByClassName('MainMenu')[0].style.display = 'none';
        document.getElementsByClassName('Questions')[0].style.display = 'none';
        document.getElementsByClassName('Correct')[0].style.display = 'block';
    }
}