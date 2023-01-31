import "./styles.css";
import { cards } from "./cardInfo";

function createContentAboutUs() {
  const main = document.createElement("main");

  main.classList.add("main-content-about");
  main.appendChild(createSectionTitle());
  main.appendChild(createSectionCompanyInfo());
  main.appendChild(createSectionAboutTopics());

  main.style.display = "none";

  return main;
}

function createSectionTitle() {
  const section = document.createElement("section");
  const divImgBackground = document.createElement("div");
  const divIntro = document.createElement("div");
  const divButtons = document.createElement("div");
  const btnLegacy = document.createElement("button");
  const btnHistory = document.createElement("button");
  const p = document.createElement("p");

  p.textContent = "Nuestro objetivo es brindarte un servicio de calidad";
  btnLegacy.textContent = "Nuestro propósito";
  btnHistory.textContent = "Nuestra historia";

  divButtons.setAttribute("id", "buttons-introduction");
  divIntro.classList.add("about-introduction");
  divImgBackground.classList.add("image-legacy");

  divButtons.appendChild(btnLegacy);
  divButtons.appendChild(btnHistory);
  divIntro.appendChild(p);
  divIntro.appendChild(divButtons);
  divImgBackground.appendChild(divIntro);

  section.classList.add("title");
  section.appendChild(divImgBackground);

  return section;
}

function createSectionCompanyInfo() {
  const section = document.createElement("section");
  const div_info = document.createElement("div");
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  h2.textContent = "Que hacemos";
  p.textContent = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
  repellat itaque id amet eius quidem quibusdam accusantium
  corporis, exercitationem debitis optio animi dicta veritatis
  iure commodi porro, laudantium quos odio aliquid unde ipsam
  adipisci totam alias. Officia porro eum ipsum!
  `;

  div.appendChild(h2);
  div.appendChild(p);

  div_info.setAttribute("id", "about-info");
  div_info.appendChild(div);

  section.classList.add("company-info");
  section.appendChild(div_info);
  return section;
}

function createSectionAboutTopics() {
  const section = document.createElement("section");
  const divBackground = document.createElement("topics-background");
  const gridCards = document.createElement("div");

  divBackground.classList.add("topics-background");
  gridCards.setAttribute("id", "grid-about");

  cards.forEach((card) => {
    const div = document.createElement("div");
    const i = document.createElement("i");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    div.setAttribute("id", "card");
    i.classList.add("fa-solid", card["icon"]);
    h3.textContent = card["title"];
    p.textContent = card["content"];

    div.appendChild(i);
    div.appendChild(h3);
    div.appendChild(p);
    gridCards.appendChild(div);
  });

  divBackground.appendChild(gridCards);

  section.classList.add("about-topics");
  section.appendChild(divBackground);
  return section;
}

export { createContentAboutUs };
