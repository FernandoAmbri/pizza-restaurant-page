import "./styles.css";
import { card_info } from "./card-info";

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
  const div_image_background = document.createElement("div");
  const div_introduction = document.createElement("div");
  const div_buttons = document.createElement("div");
  const button_legacy = document.createElement("button");
  const button_history = document.createElement("button");
  const p = document.createElement("p");

  p.textContent = "Our goal is to give you something unique";
  button_legacy.textContent = "OUR LEGACY";
  button_history.textContent = "OUR HISTORY";

  div_buttons.setAttribute("id", "buttons-introduction");
  div_introduction.classList.add("about-introduction");
  div_image_background.classList.add("image-legacy");

  div_buttons.appendChild(button_legacy);
  div_buttons.appendChild(button_history);
  div_introduction.appendChild(p);
  div_introduction.appendChild(div_buttons);
  div_image_background.appendChild(div_introduction);

  section.classList.add("title");
  section.appendChild(div_image_background);

  return section;
}

function createSectionCompanyInfo() {
  const section = document.createElement("section");
  const div_info = document.createElement("div");
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  h2.textContent = "What we do";
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
  const div_background = document.createElement("topics-background");
  const div_grid = document.createElement("div");

  div_background.classList.add("topics-background");
  div_grid.setAttribute("id", "grid-about");

  card_info.forEach((card) => {
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
    div_grid.appendChild(div);
  });

  div_background.appendChild(div_grid);

  section.classList.add("about-topics");
  section.appendChild(div_background);
  return section;
}

export { createContentAboutUs };
