document.querySelector(".btn").addEventListener("click", () => {
  const textInput = document.querySelector(".input").value;
  let count = 0;
  const dotCharacters1 = ["ب", "ج", "خ", "ذ", "ز", "ض", "ظ", "غ", "ف", "ن"];
  const dotCharacters2 = ["ت", "ق", "ی"];
  const dotCharacters3 = ["پ", "ث", "چ", "ژ", "ش"];

  for (let i = 0; i < textInput.length; i++) {
    const char = textInput[i];
    if (char == "ی" && (i == textInput.length - 1 || textInput[i + 1] == " "))
      continue;
    else {
      if (dotCharacters1.includes(char)) count++;
      else if (dotCharacters2.includes(char)) count += 2;
      else if (dotCharacters3.includes(char)) count += 3;
    }
  }

  document.querySelector(".result").innerText = count;
});