let secretNumber = Math.trunc(Math.random()*20)+1; //переменная загадывает случайное число
let score = 20; //начальный уровень очков
let record = 0; //рекорд по количеству оставшихся очков

// document.querySelector('.text-questions').textContent = secretNumber; //отладка, с показом секретного числа

//Сделаем отдельную функцию ждя вывода разнообразных сообщений guess-message

const displayGuessMessage = function(message) {
   document.querySelector('.guess-message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function() {
   const guessingNumber = Number(document.querySelector('.number-input').value); //заносим число введенное в input в переменную guessingNumber и преобразуем string в number

   //Число не введено
   if(guessingNumber === 0) {
      // document.querySelector('.guess-message').textContent = 'Введите число > 0.'
      displayGuessMessage('Введите число > 0.');
   
   //Введено верное число
   } else if (guessingNumber===secretNumber) {
      // document.querySelector('.guess-message').textContent = 'Верно!!!'
      displayGuessMessage('Верно!!!');
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number-input').style.backgroundColor = 'green';
      document.querySelector('.text-questions').style.fontSize = '52px';
      document.querySelector('.check').style.display = 'none';
      document.querySelector('.enter_the_number').style.display = 'none';
      document.querySelector('.again').style.display = 'block';
      document.querySelector('.text-questions').textContent = secretNumber;
      if (record === 0) {
         document.querySelector('.record').textContent = score;
         record = score;}
      else if (record < score) {
         document.querySelector('.record').textContent = score;
         record = score;}
   //Введено слишком большое или слишком маленькое число(вместо закоментированого повторяющегося кода, различающегося только выводом слишком мало или слишком много), объеденили при помощи тернароного оператора
   } else if (guessingNumber!==secretNumber && guessingNumber > 0){ 
      if (score > 1) { //игра идет пока не кончатся очки
      // document.querySelector('.guess-message').textContent = guessingNumber>secretNumber ? 'Слишком много!' : 'Слишком мало!';
      displayGuessMessage(guessingNumber>secretNumber ? 'Слишком много!' : 'Слишком мало!');//заменили функцией закоментированое выше
      score--;
      document.querySelector('.score-point').textContent = score;
      } else { //очки закончились
         // document.querySelector('.guess-message').textContent = 'Вы проиграли:('
         displayGuessMessage('Вы проиграли:(');//теперь тут постоянно работает функция
         document.querySelector('.check').style.display = 'none';
         document.querySelector('.enter_the_number').style.display = 'none';
         document.querySelector('.score-point').textContent = 0;
         document.querySelector('.again').style.display = 'block';
      }
   
   /*Это повторяющийся код с двумя разными условиями, заменили тернарным поператором*/   
   //    else if (guessingNumber>secretNumber && guessingNumber > 0) {
   //    if (score > 1) { //игра идет пока не кончатся очки
   //       document.querySelector('.guess-message').textContent = 'Слишком много!'
   //       score--;
   //       document.querySelector('.score-point').textContent = score;
   //    } else { //очки закончились
   //       document.querySelector('.guess-message').textContent = 'Вы проиграли:('
   //       document.querySelector('.check').style.display = 'none';
   //       document.querySelector('.enter_the_number').style.display = 'none';
   //       document.querySelector('.score-point').textContent = 0;
   //       document.querySelector('.again').style.display = 'block';
   //    }
   
   // //Введено слишком маленькое число
   // } else if (guessingNumber<secretNumber && guessingNumber > 0) {
   //    if (score > 1) { //игра идет пока не кончатся очки
   //       document.querySelector('.guess-message').textContent = 'Слишком мало!'
   //       score--;
   //       document.querySelector('.score-point').textContent = score;
   //    } else { //очки закончились
   //       document.querySelector('.guess-message').textContent = 'Вы проиграли:('
   //       document.querySelector('.check').style.display = 'none';
   //       document.querySelector('.enter_the_number').style.display = 'none';
   //       document.querySelector('.score-point').textContent = 0;
   //       document.querySelector('.again').style.display = 'block';
   //    }

   //Введено минусовое число   
   } else if (guessingNumber < 0) {
      // document.querySelector('.guess-message').textContent = 'Введите "+" число.';
      displayGuessMessage('Введите "+" число.'); //теперь тут постоянно работает функция
   }
})

//Кнопка перезапуска игры
document.querySelector('.again').addEventListener('click', function() {
   document.querySelector('.number-input').value = '';
   document.querySelector('.score-point').textContent = 20;
   score = 20;
   secretNumber = Math.trunc(Math.random()*20)+1;
   document.querySelector('.text-questions').textContent = secretNumber;
   document.querySelector('body').style.backgroundColor = 'black';
   document.querySelector('.number-input').style.backgroundColor = 'black';
   // document.querySelector('.guess-message').textContent = 'Введите число!';
   displayGuessMessage('Введите число!'); //теперь тут постоянно работает функция
   document.querySelector('.check').style.display = 'block';
   document.querySelector('.enter_the_number').style.display = 'block';
   document.querySelector('.text-questions').textContent = '???';
   document.querySelector('.text-questions').style.fontSize = '38px';
   document.querySelector('.again').style.display = 'none';
})