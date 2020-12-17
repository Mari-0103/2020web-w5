const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温は華氏14度で外は寒かった。 :insertx: は外に出かけた。:inserty:　につくと、混雑していた。体重300ポンドの :insertx:　は驚いた。:inserty:　ではよくあることだった。';
let insertX = ['ミッキーマウス','ドナルド','ダッフィー'];
let insertY = ['愛媛','福岡','大阪'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('夏',name);
  }

  if(document.getElementById("日本").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((14-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('14 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
