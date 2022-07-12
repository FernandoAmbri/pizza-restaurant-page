import "./styles.css";

function createMenu() {
  let div = document.createElement("div");
  div.textContent = "hola fernando fuck yeah";
  div.classList.add("textColor");
  document.getElementById("content").appendChild(div);
}

export { createMenu };
