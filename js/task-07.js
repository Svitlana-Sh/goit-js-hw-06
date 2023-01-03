const fontSizeControlEl = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

const onInputText = () => {
  inputText.style.fontSize = `${fontSizeControlEl.value}px`;
};

fontSizeControlEl.addEventListener("input", onInputText);
