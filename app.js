const question ='ファイナルファンタジー７の主人公は誰？';
const answers = [
    'ティーダ',
    'スコール',
    'クラウド',
    'ヴァン'
];
const correct = 'クラウド';

console.log(document.getElementById('js-questin').textContent = question);

const $button = document.getElementsByTagName('button')

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];



$button[0].addEventListener('click', () => {
    if(correct === document.getElementsByTagName('button')[0].textContent){
        window.alert('正解');
    }
    else{
    window.alert('不正解');
    }
});
$button[1].addEventListener('click', () => {
    if(correct === document.getElementsByTagName('button')[1].textContent){
        window.alert('正解');
    }
    else{
    window.alert('不正解');
    }
});
$button[2].addEventListener('click', () => {
    if(correct === document.getElementsByTagName('button')[2].textContent){
        window.alert('正解');
    }
    else{
    window.alert('不正解');
    }
});
$button[3].addEventListener('click', () => {
    if(correct === document.getElementsByTagName('button')[3].textContent){
        window.alert('正解');
    }
    else{
    window.alert('不正解');
    }
});