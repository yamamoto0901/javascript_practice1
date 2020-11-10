const quiz = [
    {
        questin:'ファイナルファンタジー７の主人公は誰？',
        answers:[ 'ティーダ',
        'スコール',
        'クラウド',
        'ヴァン'
        ],
        correct:'クラウド'
    },{
        questin:'通称「デジモン」の正式名称はどれ？',
        answers:[ 'デジータトモンスター',
        'デジタルモンスト',
        'デジタルモンスター',
        'デンジモン'
        ],
        correct:'デジタルモンスター'
    },{
        questin:'XJAPANのドラマーは誰？',
        answers:[ 'Hide',
        'Toshi',
        'YOSHIKI',
        'Pata'
        ],
        correct:'YOSHIKI'
    },{
        questin:'日本で一番人気のSNSは？',
        answers:[ 'Twitter',
        'TikTok',
        'Instagram',
        'LINE'
        ],
        correct:'LINE'
    },
];

const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById('js-questin').textContent = quiz[quizIndex].question;
    

    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};

setupQuiz();

const clickHandler = (e) =>{
    if(correct === e.target.textContent){
    window.alert('正解');
    }
    else{
    window.alert('不正解');
    }

    quizIndex++;

    if(quizIndex < quizLength){

    } else {
        window.aleat('終了')
    }

};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
