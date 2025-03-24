const solution = "BLUME"; // Beispielwort
let attempts = 6;
const keyboardLayout = "QWERTZUIOPÜ ASDFGHJKLÖÄ YXCVBNM".split(" ");

document.getElementById("guess-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") submitGuess();
});

function initKeyboard() {
  const keyboard = document.getElementById("keyboard");
  keyboard.innerHTML = "";
  keyboardLayout.forEach((row) => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("keyboard-row");
    row.split("").forEach((letter) => {
      const key = document.createElement("span");
      key.classList.add("key");
      key.textContent = letter;
      key.id = `key-${letter}`;
      rowDiv.appendChild(key);
    });
    keyboard.appendChild(rowDiv);
  });
}

function submitGuess() {
  if (attempts > 0) {
    attempts--;
    document.getElementById("attempts-left").textContent = attempts;
  }
  const input = document.getElementById("guess-input");
  const guess = input.value.toUpperCase();
  input.value = "";

  if (guess.length !== 5) {
    showMessage("Das Wort muss 5 Buchstaben haben!");
    return;
  }

  attempts--;
  updateBoard(guess);
  updateKeyboard(guess);

  if (guess === solution) {
    showMessage("Glückwunsch! Du hast das Wort erraten! 🎉");
    disableInput();
    return;
  }

  if (attempts === 0) {
    showMessage(`Verloren! Das Wort war: ${solution}`);
    disableInput();
  }
}

function updateBoard(guess) {
  const board = document.getElementById("game-board");
  const row = document.createElement("div");
  row.classList.add("row");

  guess.split("").forEach((letter, index) => {
    const box = document.createElement("span");
    box.classList.add("box");
    box.textContent = letter;

    if (solution[index] === letter) {
      box.classList.add("correct");
    } else if (solution.includes(letter)) {
      box.classList.add("present");
    } else {
      box.classList.add("absent");
    }

    row.appendChild(box);
  });

  board.appendChild(row);
}

function updateKeyboard(guess) {
  guess.split("").forEach((letter, index) => {
    const key = document.getElementById(`key-${letter}`);
    if (!key) return;

    if (solution[index] === letter) {
      key.classList.add("correct");
    } else if (solution.includes(letter)) {
      key.classList.add("present");
    } else {
      key.classList.add("absent");
    }
  });
}

function showMessage(msg) {
  document.getElementById("message").textContent = msg;
}

function disableInput() {
  document.getElementById("guess-input").disabled = true;
}

function handleKeyboardClick(event) {
  const key = event.target;
  if (key.classList.contains("key")) {
    const input = document.getElementById("guess-input");
    if (input.value.length < 5) {
      input.value += key.textContent;
    }
  }
}

function deleteLastCharacter() {
  const input = document.getElementById("guess-input");
  input.value = input.value.slice(0, -1);
}

initKeyboard();
