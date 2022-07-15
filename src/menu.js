import "./styles.css";
import { pizzas_obj } from "./pizza_info";

function createContentMenu() {
  const main = document.createElement("main");
  main.classList.add("main-menu-content");

  main.appendChild(createSectionTitle());
  main.appendChild(createSectionPizzas());

  main.style.display = "none";

  return main;
}

function createSectionTitle() {
  const section_title_background = document.createElement("section");
  const div_title_background = document.createElement("div");
  const h1 = document.createElement("h1");

  h1.textContent = "Menu";
  div_title_background.classList.add("menu_image_background");

  div_title_background.appendChild(h1);
  section_title_background.appendChild(div_title_background);

  return section_title_background;
}

function createSectionPizzas() {
  const section_pizzas = document.createElement("Section");
  const h2 = document.createElement("h2");
  const div_container_pizzas = document.createElement("div");

  h2.textContent = "Pizza";

  pizzas_obj.forEach((pizza) => {
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

    div_container_pizzas.appendChild(div);
  });

  div_container_pizzas.classList.add("container-pizzas");

  section_pizzas.classList.add("section-pizzas");
  section_pizzas.appendChild(h2);
  section_pizzas.appendChild(div_container_pizzas);

  return section_pizzas;
}

export { createContentMenu };
