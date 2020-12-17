const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '外は華氏14度で寒かった。:insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['ミッキー','ドナルド','デイジー'];
let insertY = ['愛媛','福岡','和歌山'];
let insertZ = ['焼けた','溶けた','這った'];

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
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("日本").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  '摂氏' ＋ Math.round((14-32) * 5 / 9);
    newStory = newStory.replace('華氏14度',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

