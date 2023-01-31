import "./styles.css";

function createHomeContent() {
  const main = document.createElement("main");
  const h2 = document.createElement("h2");
  const section = document.createElement("section");
  const divSlides = document.createElement("div");
  const divDots = document.createElement("div");
  const slidesPrevious = document.createElement("a");
  const slidesNext = document.createElement("a");
  const btnShowMenu = document.createElement("button");

  const slidesPizzasArr = [
    "pizza-hawaina.jpg",
    "pizza-americana.jpg",
    "pizza-mexicana.jpg",
    "pizza-peperoni.jpg",
    "pizza-suprema.jpg",
    "pizza-veggi.jpg",
  ];
  const pizzasArr = [
    "Hawaina",
    "Americana",
    "Mexicana",
    "Pepperoni",
    "Suprema",
    "Veggi",
  ];

  h2.textContent = "Las mejores pizzas!";

  for (let i = 0; i < slidesPizzasArr.length; i++) {
    const divSlide = document.createElement("div");
    const imgSlide = document.createElement("img");
    const descSlide = document.createElement("p");
    const spanDot = document.createElement("span");

    imgSlide.setAttribute("src", `./img/${slidesPizzasArr[i]}`);
    imgSlide.setAttribute("alt", `${pizzasArr[i]}`);

    descSlide.classList.add("description");
    descSlide.textContent = `${pizzasArr[i]}`;

    divSlide.classList.add("slide");
    divSlide.appendChild(imgSlide);
    divSlide.appendChild(descSlide);

    spanDot.classList.add("dot");
    spanDot.setAttribute("dot-index", `${i + 1}`);

    divSlides.appendChild(divSlide);
    divDots.appendChild(spanDot);
  }

  divSlides.classList.add("container-slides");

  slidesPrevious.classList.add("prev");
  slidesPrevious.textContent = "❮";

  slidesNext.classList.add("next");
  slidesNext.textContent = "❯";

  divSlides.appendChild(slidesPrevious);
  divSlides.appendChild(slidesNext);

  divDots.classList.add("dots");
  section.classList.add("slides");

  section.appendChild(divSlides);
  section.appendChild(divDots);

  btnShowMenu.classList.add("show-menu");
  btnShowMenu.textContent = "Menú";

  main.classList.add("main-content");
  main.appendChild(h2);
  main.appendChild(section);
  main.appendChild(btnShowMenu);

  return main;
}

export { createHomeContent };
