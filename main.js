var CurrentQuestion = 0;

const Questions = [
    ['Determine o valor de x na equação: x² -16 = 0', '4', '1', '2', '5', '6'],
    ['Assinale a alternativa em que a equação do 2° grau esteja completa.', '3x² -2x + 2 = 0', '5x² -2 = 0', 'x² + 4x = 0', 'x² + 25 = 0', 'x³ + 2x² + 10 = 0'],
    ['Sabendo que que x = 5, determine o resultado da equação a seguir: 2x² + 3x -10 = ?', '55', '50', '59', '72', '78'],
    ['Identifique quem é A, B e C: 65x² + 25x + 10 = 0', 'a = 65 / b = 25 / c = 10', 'a = 10 / b = 65 / c = 25', 'a = 25 / b = 10 / c = 65', 'a = 32 / b = 13 / c = 47', 'a = 2 / b = 1 / c = -65'],
    ['Descubra o Delta da equação a seguir: 2x² -3x -5 = 0', '49', '52', '42', '12', '22'],
    ['Descubra o Delta da equação a seguir: 2x² + 7x + 5 = 0', '9', '12', '52', '42', '22'],
    ['Descubra os valores de X na equação a seguir: 3x² -2x -8 = 0', '(-4/3; 2)', '(-3; 20)', '(-25/4; 3)', '(289/45; 26)', '(78/5; 12)']
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

    var questionOrder = [1,2,3,4,5];

    questionOrder = shuffle(questionOrder);
    
    document.getElementsByClassName('Correct')[0].style.display = 'none';
    document.getElementsByClassName('Failed')[0].style.display = 'none';

    DOM.QuestionTitle.innerHTML = Questions[CurrentQuestion][0];
    DOM.QuestionAnswer1.innerHTML = Questions[CurrentQuestion][questionOrder[0]];
    DOM.QuestionAnswer2.innerHTML = Questions[CurrentQuestion][questionOrder[1]];
    DOM.QuestionAnswer3.innerHTML = Questions[CurrentQuestion][questionOrder[2]];
    DOM.QuestionAnswer4.innerHTML = Questions[CurrentQuestion][questionOrder[3]];
    DOM.QuestionAnswer5.innerHTML = Questions[CurrentQuestion][questionOrder[4]];
}

function verifyResponse(id) {
    if(document.getElementById('Answer'+id).innerText !== Questions[CurrentQuestion][1]) {
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