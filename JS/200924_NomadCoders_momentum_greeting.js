const form = document.querySelector('.js_form'),
      input = form.querySelector('input'),
      greeting = document.querySelector('.js_greetings');

const USER_LS = 'currentUser',
      SHOWING_CN = 'showing';

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {  
  event.preventDefault();
  const currentUser = input.value;
  paintGreeting(currentUser);
  saveName(currentUser);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', handleSubmit)
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello, ${text}.`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null) {
    askForName();
  }
  else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}
init();

// 로컬스토리지의 데이터를 가져오는 함수입니다.
// 체크합니다. 현재 로컬스토리지에 유저 값이 있는지 없는지 구분하여 수행할 코드를 작성합니다.
// 둘 다 폼은 디스플레이 논이 됩니다.
// 만약 현재 유저가 값이 없다면 색상을 칠합니다.
// 만약 현재 유저가 로컬에 있다면 
// 텍스트를 칠하려면 폼을 숨겨야합니다.
// 유저가 존재하면 값이 있기 때문에 색을 칳합니다.
// 유저가 이름을 입력하면 엔터를 했을때 제출하고싶습니다.
// 인풋창에 엔터를 했을때 새로고침되는 기본 이벤트가 발생합니다.
// 그 기본 이벤트를 막고싶습니다.
// 이베트가 발생하면 거품이 일어나듯 아래에서 위로 올라갑니다. 도큐먼트로 가버립니다.