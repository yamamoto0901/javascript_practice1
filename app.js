const quiz = [
    {
        question: 'ファイナルファンタジー７の主人公は誰？',
        answers: [
        'ティーダ',
        'スコール',
        'クラウド',
        'ヴァン'
        ],
        correct:'クラウド'
    }, {
        question: '通称「デジモン」の正式名称はどれ？',
        answers: [
        'デジタルモンスター',
        'デジタルモンスト',
        'デジットモンスター',
        'デンジモン'
        ],
        correct:'デジタルモンスター'
    },{
        question: 'XJAPANのドラマーは誰？',
        answers: [
        'YOSHIKI',
        'Toshi',
        'Hide',
        'Pata'
        ],
        correct:'YOSHIKI'
    }, {
        question: '日本で一番人気のSNSは？',
        answers: [
        'Twitter',
        'TikTok',
        'Instagram',
        'LINE'
        ],
        correct:'LINE'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById('js-questin').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};

setupQuiz();

const clickHandler = (e) =>{
    if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
    } else {
    window.alert('不正解');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
    window.alert('終了！あなたの正解数は' +score + '/' + quizLength + 'です！');
    }

};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
    });
    handlerIndex++;
}
