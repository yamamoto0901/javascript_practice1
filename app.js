const question ='ファイナルファンタジー７の主人公は誰？';
const answers = [
    'ティーダ',
    'スコール',
    'クラウド',
    'ヴァン'
];
const correct = 'クラウド';

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

const setupQuiz = () => {
    console.log(document.getElementById('js-questin').textContent = question);
    
    // $button[0].textContent = answers[0];
    // $button[1].textContent = answers[1];
    // $button[2].textContent = answers[2];
    // $button[3].textContent = answers[3];
    
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = answers[buttonIndex];
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
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
