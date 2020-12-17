const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '外は華氏14度で寒かった。:insertx: は出かけた。 寒かったので10ポンドの :inserty: を焼いた。　:insertx:　は　:insertz: 。 夏はとても驚いた。:insertx:　が　:insertz: 。';
let insertX = ['ミッキー','ドナルド','デイジー'];
let insertY = ['パン','ケーキ','クッキー'];
let insertZ = ['焼けた','焦げた','這った'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('夏',name);
  }

  if(document.getElementById("日本").checked) {
    const weight = Math.round(10*0.453) + 'キロ';
    const temperature =  '摂氏' ＋ Math.round((14-32) * 5 / 9);
    newStory = newStory.replace('華氏14度',temperature);
    newStory = newStory.replace('10ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

