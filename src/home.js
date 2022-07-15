import "./styles.css";

function createHomeContent() {
  const array_pizzas_slides = [
    "pizza-hawaina.jpg",
    "pizza-americana.jpg",
    "pizza-mexicana.jpg",
    "pizza-peperoni.jpg",
    "pizza-suprema.jpg",
    "pizza-veggi.jpg",
  ];
  const array_pizzas = [
    "Pizza hawaina",
    "Pizza americana",
    "Pizza mexicana",
    "Pizza peperoni",
    "Pizza suprema",
    "Pizza veggi",
  ];
  const main = document.createElement("main");
  const h2 = document.createElement("h2");
  const section = document.createElement("section");
  const div_slides = document.createElement("div");
  const div_dots = document.createElement("div");
  const a_prev = document.createElement("a");
  const a_next = document.createElement("a");
  const button = document.createElement("button");

  h2.textContent = "The best pizzas on earth!";

  for (let i = 0; i < array_pizzas_slides.length; i++) {
    const div_slide = document.createElement("div");
    const img_slide = document.createElement("img");
    const p_slide = document.createElement("p");
    const span_dot = document.createElement("span");

    img_slide.setAttribute("src", `./img/${array_pizzas_slides[i]}`);
    img_slide.setAttribute("alt", `${array_pizzas[i]}`);

    p_slide.classList.add("description");
    p_slide.textContent = `${array_pizzas[i]}`;

    div_slide.classList.add("slide");
    div_slide.appendChild(img_slide);
    div_slide.appendChild(p_slide);

    span_dot.classList.add("dot");
    span_dot.setAttribute("dot-index", `${i + 1}`);

    div_slides.appendChild(div_slide);
    div_dots.appendChild(span_dot);
  }

  div_slides.classList.add("container-slides");

  a_prev.classList.add("prev");
  a_prev.textContent = "❮";

  a_next.classList.add("next");
  a_next.textContent = "❯";

  div_slides.appendChild(a_prev);
  div_slides.appendChild(a_next);

  div_dots.classList.add("dots");
  section.classList.add("slides");

  section.appendChild(div_slides);
  section.appendChild(div_dots);

  button.classList.add("show-menu");
  button.textContent = "Show Menu";

  main.classList.add("main-content");
  main.appendChild(h2);
  main.appendChild(section);
  main.appendChild(button);

  return main;
}

export { createHomeContent };
