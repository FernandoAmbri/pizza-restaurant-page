import "./styles.css";
import { objPizzas } from "./pizzasInfo";

function createContentMenu() {
  const main = document.createElement("main");
  main.classList.add("main-menu-content");

  main.appendChild(createSectionTitle());
  main.appendChild(createSectionPizzas());

  main.style.display = "none";

  return main;
}

function createSectionTitle() {
  const sectionBackground = document.createElement("section");
  const divTitleBackground = document.createElement("div");
  const h1 = document.createElement("h1");

  h1.textContent = "Menu";
  divTitleBackground.classList.add("menu_image_background");

  divTitleBackground.appendChild(h1);
  sectionBackground.appendChild(divTitleBackground);

  return sectionBackground;
}

function createSectionPizzas() {
  const sectionPizzas = document.createElement("Section");
  const h2 = document.createElement("h2");
  const divContainerPizzas = document.createElement("div");

  h2.textContent = "Pizza";

  objPizzas.forEach((pizza) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    img.setAttribute("src", pizza["image_src"]);
    img.setAttribute("alt", pizza["nombre"]);
    h3.textContent = pizza["nombre"];

    p.textContent = pizza["descripcion"];

    div.classList.add("pizza-info");
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);

    divContainerPizzas.appendChild(div);
  });

  divContainerPizzas.classList.add("container-pizzas");

  sectionPizzas.classList.add("section-pizzas");
  sectionPizzas.appendChild(h2);
  sectionPizzas.appendChild(divContainerPizzas);

  return sectionPizzas;
}

export { createContentMenu };
