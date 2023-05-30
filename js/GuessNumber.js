export default class GuessNumber {
  constructor(app) {
    this.app = app; // выводим переменную
    this.guessedNumber = 0; // переменная куда добавляется число которое мы вводим
    this.userMsgChoices = ["Хорошо,это оно ",
                    "Может быть, твой номер "];
    this.botMsgChoices = ["Нет, мой номер ",
                          "Ты шутишь, что ли? Мой номер "];

    this.screen = this.app.querySelector(".app__screen");
    this.sendBtn = this.app.querySelector(".app-controls__button-send");  // эти переменные собирают стиль из функций и передают в классы
    this.inputGuess = this.app.querySelector(".app-controls__input-number-field");

    this.sendBtn.addEventListener("click", ()=>{ // вызов функции для условий меньше, больше
        this.checkGuess();
    });
  }

  init() {     //Вызов начала игры
    this.setGuessedNumber(this.getRandomInt(10)); // переменная которую вписывает пользователь закидывается в рандомайзер
    this.say("Привет", "bot");
    this.say("Угадай число от 1 до 10", "bot");
    this.say("Сможешь угадать?", "bot");
  }

  setGuessedNumber(num) { // функция для сохранения переменной назначеной пользователем
    this.guessedNumber = num;
  }

  getGuessedNumber() {  //функция возращающия написанное пользователем число
    return this.guessedNumber;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max); //генерирует случайное целое число max = 10
  }

  say(message, cls) { // создаем функцию которая  передает в HTML  и добавляет свойства сss
    const msgBubble = this.createBubble(message, cls); //вызов функции которая передает в HTML начало игры и добавляет свойства сss
    this.screen.append(msgBubble)
  }

  randomChoice(choices) {
    return choices[ Math.floor(Math.random() * choices.length) ]; // из списка выбирает рандомный текст
  }

  checkGuess() { // функция для больше, меньше
    const checkingNum = parseInt(this.inputGuess.value); // переменная в которую входимое вводимое число через input
    console.log( checkingNum, this.getGuessedNumber() ) // показывает какое число загаданно рандомайзером

    this.say(this.randomChoice(this.userMsgChoices)+checkingNum+'?', "player");

    if (checkingNum < parseInt(this.getGuessedNumber())) {
      this.say(this.randomChoice(this.botMsgChoices) + " больше", "bot");
    }
    else if (checkingNum > parseInt(this.getGuessedNumber())) {
      this.say(this.randomChoice(this.botMsgChoices) + " меньше", "bot");
    }
    else {
      this.say("Ты угадал 😝", "bot");
    }

  }

  createBubble(message, cls) {
    const bubble = document.createElement("div"); // чтобы начало игры передавалась в div
    bubble.classList.add("bubble"); // передает с css свойства
    bubble.classList.add(cls) // передаем свойства в переменную cls
    bubble.innerHTML = message; //чтобы изменения дошли до HTML
    return bubble;
  }

}
