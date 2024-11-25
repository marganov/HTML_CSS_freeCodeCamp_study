function getRandomComputerResult() {
    // Создаем массив с опциями: "Камень", "Бумага", "Ножницы"
    const options = ["Rock", "Paper", "Scissors"];
    
    // Выбираем случайный индекс, умножая Math.random() на длину массива и округляя вниз
    const randomIndex = Math.floor(Math.random() * options.length);
    
    // Возвращаем случайный элемент из массива options
    return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
    // Проверяем, выигрывает ли игрок:
    // 1. Игрок выбрал "Камень", а компьютер "Ножницы"
    // 2. Игрок выбрал "Ножницы", а компьютер "Бумагу"
    // 3. Игрок выбрал "Бумагу", а компьютер "Камень"
    // Если одно из условий выполнено, возвращается true
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
}

// Переменные для хранения текущих очков игрока и компьютера
let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
    // Получаем случайный выбор компьютера
    const computerResult = getRandomComputerResult();

    // Проверяем, выиграл ли игрок
    if (hasPlayerWonTheRound(userOption, computerResult)) {
        // Увеличиваем счет игрока
        playerScore++;
        // Возвращаем сообщение о выигрыше игрока
        return `Player wins! ${userOption} beats ${computerResult}`;
    } 
    // Проверяем, ничья ли
    else if (computerResult === userOption) {
        // Возвращаем сообщение о ничьей
        return `It's a tie! Both chose ${userOption}`;
    } 
    // Если игрок проиграл
    else {
        // Увеличиваем счет компьютера
        computerScore++;
        // Возвращаем сообщение о выигрыше компьютера
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}

const playerScoreSpanElement = document.getElementById("player-score");
// Получаем элемент для отображения счета игрока

const computerScoreSpanElement = document.getElementById("computer-score");
// Получаем элемент для отображения счета компьютера

const roundResultsMsg = document.getElementById("results-msg");
// Получаем элемент для отображения сообщения о результате раунда

const winnerMsgElement = document.getElementById("winner-msg");
// Получаем элемент для отображения сообщения о победителе игры

const optionsContainer = document.querySelector(".options-container");
// Получаем контейнер с кнопками для выбора опций (Камень, Ножницы, Бумага)

const resetGameBtn = document.getElementById("reset-game-btn");
// Получаем кнопку для сброса игры

function showResults(userOption) {
    // Обновляем сообщение о результате текущего раунда
    roundResultsMsg.innerText = getRoundResults(userOption);
    
    // Обновляем отображение очков компьютера и игрока
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;

    // Проверяем, достиг ли кто-то 3 очков
    if (playerScore === 3 || computerScore === 3) {
        // Определяем победителя и обновляем сообщение о победе
        winnerMsgElement.innerText = `${
            playerScore === 3 ? "Player" : "Computer"
        } has won the game!`;

        // Показываем кнопку сброса игры
        resetGameBtn.style.display = "block";
        
        // Скрываем контейнер с опциями, чтобы предотвратить дальнейшую игру
        optionsContainer.style.display = "none";
    }
};

function resetGame() {
    // Сбрасываем очки игрока и компьютера
    playerScore = 0;
    computerScore = 0;

  
    // Обновляем отображение очков
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
  
    // Скрываем кнопку сброса
    resetGameBtn.style.display = "none";
  
    // Показываем контейнер с опциями
    optionsContainer.style.display = "block";
  
    // Очищаем сообщения
    winnerMsgElement.innerText = '';
    roundResultsMsg.innerText = '';
  }
  
  
  resetGameBtn.addEventListener("click", resetGame);
  // Добавляем обработчик события на кнопку сброса игры.
  // При нажатии на кнопку вызывается функция resetGame.
  
  const rockBtn = document.getElementById("rock-btn");
  // Получаем кнопку для выбора "Камень"
  
  const paperBtn = document.getElementById("paper-btn");
  // Получаем кнопку для выбора "Бумага"
  
  const scissorsBtn = document.getElementById("scissors-btn");
  // Получаем кнопку для выбора "Ножницы"
  
  rockBtn.addEventListener("click", function () {
      showResults("Rock");
  });
  // Добавляем обработчик события на кнопку "Камень".
  // При нажатии передаем "Rock" в функцию showResults.
  
  paperBtn.addEventListener("click", function () {
      showResults("Paper");
  });
  // Добавляем обработчик события на кнопку "Бумага".
  // При нажатии передаем "Paper" в функцию showResults.
  
  scissorsBtn.addEventListener("click", function () {
      showResults("Scissors");
  });
  // Добавляем обработчик события на кнопку "Ножницы".
  // При нажатии передаем "Scissors" в функцию showResults.
  