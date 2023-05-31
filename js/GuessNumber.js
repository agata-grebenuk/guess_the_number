export default class GuessNumber {
  constructor(app) {
    this.app = app; // выводим переменную
    this.guessedNumber = 0; // переменная куда добавляется число которое мы вводим
    this.userMsgChoices = ["Хорошо,это оно ",
                    "Может быть, твой номер "];

    this.screen = this.app.querySelector(".app__screen");
    this.sendBtn = this.app.querySelector(".app-controls__button-send");  // эти переменные собирают стиль из функций и передают в классы
    this.inputGuess = this.app.querySelector(".app-controls__input-number-field");

    this.sendBtn.addEventListener("click", ()=>{ // вызов функции для условий меньше, больше
        this.checkGuess();
    });
  }

  init() {     //Вызов начала игры
    this.getRandomInt(); // переменная которую вписывает пользователь закидывается в рандомайзер
    this.say("Привет. Сыграем в игру 'Угадай число'? Я загадаю число от 0 до 10, а ты должен его угадать!", "bot");
  }

  setGuessedNumber(num) { // функция для сохранения переменной назначеной пользователем
    this.guessedNumber = num;
  }

  getGuessedNumber() {  //функция возращающия написанное пользователем число
    return this.guessedNumber;
  }

  getRandomInt() {
    this.guessedNumber = 1 + Math.floor(Math.random() * 10); //генерирует случайное целое число от 0 до 10
    console.log(this.guessedNumber)
  }

  say(message, cls) { // функцию которая  передает в HTML  и добавляет свойства сss
    const msgBubble = this.createBubble(message, cls); //вызов функции которая передает в HTML начало игры и добавляет свойства сss
    this.screen.append(msgBubble) // append - добавлять
  }

  randomChoice(choices) {
    return choices[ Math.floor(Math.random() * choices.length) ]; // из списка выбирает рандомный текст
  }

  checkGuess() { // функция для больше, меньше
    const checkingNum = parseInt(this.inputGuess.value); // переменная в которую входимое вводимое число через input
    console.log( checkingNum, this.getGuessedNumber() ) // показывает какое число загаданно рандомайзером

    this.say(this.randomChoice(this.userMsgChoices)+checkingNum+'?', "player");

    if (checkingNum < parseInt(this.getGuessedNumber())) {
      this.say(" Нет, мой номер больше!", "bot");
    }
    else if (checkingNum > parseInt(this.getGuessedNumber())) {
      this.say("Нет, мой номер меньше!", "bot");
    }
    else {
      this.say("Ты угадал 😝", "bot");
    }

    function greet () {
      alert ('Ты что тормозишь!!' + this.createBubble(message, cls));
      }
      setTimeout (greet, 2000, loggedInUser);
  }
  createBubble(message, cls) {
    const bubble = document.createElement("div"); // создает элемент div
    bubble.classList.add("bubble"); // добавляется класс bubble
    bubble.classList.add(cls) // добавляет класс bot который находится в say
    bubble.innerHTML = message;// добавляет слова которые вписанны в js
    return bubble;
  }

}
