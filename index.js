const quiz = [
  {
  question : 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
  answers : [ 'スーパーファミコン', 'プレーステーション2', 'ニンテンドースイッチ', 'ニンテンドーDS' ],
  correct : 'ニンテンドーDS'
  },  {
  question : '糸井重里が企画にかかわった任天堂の看板ゲームといえば？',
  answers : [ 'MOTHER2', 'スーパーマリオブラザーズ2', 'ドンキーコング', '星のカービィ' ],
  correct : 'MOTHER2'
 }, {
  question : 'KINGDAMの主人公の名前は？', 
  answers : [ '信', '漂', 'えいせい', '天' ],
  correct : '信'
 }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// ここから授業の課題
let $status = document.getElementById('js-status');
const indexQuestions = () => {
  $status.innerHTML = `${quizIndex+1}/${quizLength}`;
  console.log(quizIndex+1);
  // $status.innerHTML = ( + index + '/' + quizLength + );
 // indexQuestion(quizIndex+1); ←これをどこに入れればいいかわからない
};

// const init = () =>{
//   document.getElementById('js-question').textContent = quiz[quizIndex].question;
//   indexQuestion(quizIndex+1);
// };
// 

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  indexQuestions(); 
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

// ボタンを押して正誤判定

const clickHandler = (e) =>{
  if (quiz[quizIndex].correct === e.target.textContent){
    window.alert ('正解！');
    score++;
    } else {
    window.alert ('不正解！');
    }
  
  quizIndex++;
    if (quizIndex < quiz.length) {
    setupQuiz();
  } else {
     window.alert('終了！あなたの正解数は '+ score + '/' + quiz.length + ' です！' );
  }
};

let handlerindex = 0 ;
while(handlerindex < buttonLength){
  $button[handlerindex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerindex++; 
}