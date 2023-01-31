import "./styles.css";
import { createHomeContent } from "./home";
import { createContentMenu } from "./menu";
import { createContentAboutUs } from "./about";
import { createContentContactUs } from "./contact";

let slideIndex = 1;

function createNav() {
  const menuItems = ["Home", "Menú", "Quienes somos", "Contacto"];
  const h1 = document.createElement("h1");
  const ul = document.createElement("ul");
  const div = document.createElement("div");
  const nav = document.createElement("nav");
  h1.textContent = "Pizza Logo";

  for (let i = 0; i < menuItems.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = menuItems[i];
    li.appendChild(a);
    ul.appendChild(li);
  }
  ul.classList.add("navbar-menu");
  div.classList.add("container");
  div.appendChild(h1);
  div.appendChild(ul);
  nav.classList.add("navbar");
  nav.appendChild(div);
  return nav;
}

function createFooter() {
  const iconsArr = ["fa-facebook", "fa-twitter", "fa-instagram", "fa-youtube"];
  const footerLinksArr = [
    "Contacto",
    "Blog",
    "Política de privacidad",
    "Términos y condiciones",
  ];

  const footer = document.createElement("footer");
  const sectionIcons = document.createElement("section");
  const sectionInfo = document.createElement("section");
  const divIcons = document.createElement("div");
  const divLogo = document.createElement("div");
  const divLogoText = document.createElement("div");
  const divLinks = document.createElement("div");
  const footerLinks = document.createElement("nav");
  const textIcons = document.createElement("p");
  const copyright = document.createElement("p");

  textIcons.textContent = "Siguenos en nuestras redes sociales!";

  for (let i = 0; i < iconsArr.length; i++) {
    const iconsBackground = document.createElement("div");
    const a = document.createElement("a");
    const icon = document.createElement("i");

    icon.classList.add("fa-brands", `${iconsArr[i]}`);
    a.setAttribute("href", "#");
    a.appendChild(icon);

    iconsBackground.classList.add("icon-background");
    iconsBackground.appendChild(a);
    divIcons.appendChild(iconsBackground);
  }

  divIcons.classList.add("icons");
  sectionIcons.classList.add("social-icons");
  sectionIcons.appendChild(textIcons);
  sectionIcons.appendChild(divIcons);

  sectionInfo.classList.add("terms_and_conditions");
  divLogo.classList.add("logo-footer");

  divLogoText.classList.add("logo");
  divLogoText.textContent = "Pizza Logo";
  divLogo.appendChild(divLogoText);

  divLinks.classList.add("links");
  footerLinks.classList.add("footer-links");
  const ul = document.createElement("ul");
  for (let i = 0; i < footerLinksArr.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.setAttribute("href", "#");
    a.textContent = `${footerLinksArr[i]}`;
    li.appendChild(a);
    ul.appendChild(li);
  }
  footerLinks.appendChild(ul);
  divLinks.appendChild(footerLinks);

  sectionInfo.appendChild(divLogo);
  sectionInfo.appendChild(divLinks);

  copyright.textContent = "© 2022 Pizza Logo";

  footer.classList.add("footer");
  footer.appendChild(sectionIcons);
  footer.appendChild(document.createElement("hr"));
  footer.appendChild(sectionInfo);
  footer.appendChild(document.createElement("hr"));
  footer.appendChild(copyright);

  return footer;
}

(function addChilds() {
  const content = document.getElementById("content");
  content.appendChild(createNav());
  content.appendChild(createHomeContent());
  content.appendChild(createContentMenu());
  content.appendChild(createContentAboutUs());
  content.appendChild(createContentContactUs());
  content.appendChild(createFooter());
})();

const homeContent = document.querySelector(".main-content");
const menuContent = document.querySelector(".main-menu-content");
const aboutContent = document.querySelector(".main-content-about");
const contactContent = document.querySelector(".main-contact");

const slidePrevious = document.querySelector(".prev");
const slideNext = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const btnMenu = document.querySelector(".show-menu");

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (index < 1) {
    slideIndex = slides.length;
  } else if (index > slides.length) {
    slideIndex = 1;
  }

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

showSlide(slideIndex);

function currentSlide(index) {
  showSlide((slideIndex = index));
}

function nextSlide(index) {
  showSlide((slideIndex += index));
}

slidePrevious.addEventListener("click", () => {
  nextSlide(-1);
});

slideNext.addEventListener("click", () => {
  nextSlide(1);
});

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const dotIndex = Number(e.target.getAttribute("dot-index"));
    currentSlide(dotIndex);
  });
});

const navbarItems = document.querySelector(".navbar-menu");
const menuItemsArr = Array.from(navbarItems.children);

menuItemsArr.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.textContent === "Home") {
      showContentPage("block", "none", "none", "none");
    }
    if (e.target.textContent === "Menú") {
      showContentPage("none", "block", "none", "none");
    }
    if (e.target.textContent === "Quienes somos") {
      showContentPage("none", "none", "block", "none");
    }
    if (e.target.textContent === "Contacto") {
      showContentPage("none", "none", "none", "block");
    }
  });
});

btnMenu.addEventListener("click", () => {
  showContentPage("none", "block", "none", "none");
});

function showContentPage(home, menu, about, contact) {
  homeContent.style.display = home;
  menuContent.style.display = menu;
  aboutContent.style.display = about;
  contactContent.style.display = contact;
}
