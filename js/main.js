window.addEventListener("DOMContentLoaded", () => {
  console.log("= numerologist-io =============================");

  const button = document.getElementById("convertBtn");
  const result = document.getElementById("resetBtn");
  const inputField = document.getElementById("io");

  let preservedTextValue = "";

  if (button && result && inputField) {
    inputField.addEventListener("input", () => {
      preserveText();
    });

    button.addEventListener("click", convert);
    button.focus();

    result.addEventListener("click", reset);

    document.addEventListener("keydown", event => {
      if (event.key === "ArrowUp") {
        convert();
      }
      if (event.key === "ArrowDown") {
        reset();
      }
    });

    preserveText();
  }

  function preserveText() {
    preservedTextValue = inputField.value;
  }

  function reset() {
    if (inputField.value !== preservedTextValue) {
      inputField.value = preservedTextValue;
    }
  }

  function convert() {
    if (inputField.value === preservedTextValue) {
      preserveText();

      let output = [];
      const separator = " ";
      const arrayOfWords = inputField.value.split(separator);

      arrayOfWords.forEach(word => {
        output.push(numericalValueOfWord(word));
      });

      inputField.value = output.join(separator);
    }
  }

  function numericalValueOfWord(word) {
    const _word = word.toLowerCase();
    const wordLength = word.length;
    let numericalValue = 0;
    let i = 0;

    while (i < wordLength) {
      const currentCharacter = _word.charAt(i);
      const alphabetIndex = alphabet.indexOf(currentCharacter) + 1;
      numericalValue += alphabetIndex;
      ++i;
    }

    return numericalValue;
  }

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
});
