import "./styles.css";
import { createHomeContent } from "./home";
import { createContentMenu } from "./menu";
import { createContentAboutUs } from "./about";
import { createContentContactUs } from "./contact";

let slideIndex = 1;

function createNav() {
  const li_array = ["Home", "Menu", "Who we are", "Contact us"];
  const h1 = document.createElement("h1");
  const ul = document.createElement("ul");
  const div = document.createElement("div");
  const nav = document.createElement("nav");
  h1.textContent = "Pizza Logo";
  for (let i = 0; i < li_array.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = li_array[i];
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
  const array_icons = [
    "fa-facebook",
    "fa-twitter",
    "fa-instagram",
    "fa-youtube",
  ];
  const array_footer_links = [
    "Contact us",
    "Blog",
    "Cookies and Tracking",
    "Privacy Policy",
    "Terms and Conditions",
  ];
  const footer = document.createElement("footer");
  const section_icons = document.createElement("section");
  const section_info = document.createElement("section");
  const div_icons = document.createElement("div");
  const div_logo = document.createElement("div");
  const div_links = document.createElement("div");
  const nav_footer_links = document.createElement("nav");
  const p_icons = document.createElement("p");
  const p_copyright = document.createElement("p");

  p_icons.textContent = "Follow us on our social networks!";

  for (let i = 0; i < array_icons.length; i++) {
    const div_background = document.createElement("div");
    const a = document.createElement("a");
    const icon = document.createElement("i");

    icon.classList.add("fa-brands", `${array_icons[i]}`);
    a.setAttribute("href", "#");
    a.appendChild(icon);

    div_background.classList.add("icon-background");
    div_background.appendChild(a);
    div_icons.appendChild(div_background);
  }

  div_icons.classList.add("icons");
  section_icons.classList.add("social-icons");
  section_icons.appendChild(p_icons);
  section_icons.appendChild(div_icons);

  section_info.classList.add("terms_and_conditions");
  div_logo.classList.add("logo-footer");
  const div_logo_text = document.createElement("div");
  div_logo_text.classList.add("logo");
  div_logo_text.textContent = "Pizza Logo";
  div_logo.appendChild(div_logo_text);

  div_links.classList.add("links");
  nav_footer_links.classList.add("footer-links");
  const ul = document.createElement("ul");
  for (let i = 0; i < array_footer_links.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.setAttribute("href", "#");
    a.textContent = `${array_footer_links[i]}`;
    li.appendChild(a);
    ul.appendChild(li);
  }
  nav_footer_links.appendChild(ul);
  div_links.appendChild(nav_footer_links);

  section_info.appendChild(div_logo);
  section_info.appendChild(div_links);

  p_copyright.textContent = "© 2022 Pizza Logo";

  footer.classList.add("footer");
  footer.appendChild(section_icons);
  footer.appendChild(document.createElement("hr"));
  footer.appendChild(section_info);
  footer.appendChild(document.createElement("hr"));
  footer.appendChild(p_copyright);

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

const previous_slide = document.querySelector(".prev");
const next_slide = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const navbar_menu = document.querySelector(".navbar-menu");
const button_menu = document.querySelector(".show-menu");

const menu_items_array = Array.from(navbar_menu.children);

const main_content_home = document.querySelector(".main-content");
const main_content_menu = document.querySelector(".main-menu-content");
const main_content_about = document.querySelector(".main-content-about");
const main_content_contact = document.querySelector(".main-contact");

previous_slide.addEventListener("click", (e) => {
  nextSlide(-1);
});

next_slide.addEventListener("click", (e) => {
  nextSlide(1);
});

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const dot_index = Number(e.target.getAttribute("dot-index"));
    currentSlide(dot_index);
  });
});

menu_items_array.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.textContent === "Home") {
      showContentPage("block", "none", "none", "none");
    }
    if (e.target.textContent === "Menu") {
      showContentPage("none", "block", "none", "none");
    }
    if (e.target.textContent === "Who we are") {
      showContentPage("none", "none", "block", "none");
    }
    if (e.target.textContent === "Contact us") {
      showContentPage("none", "none", "none", "block");
    }
  });
});

button_menu.addEventListener("click", (e) => {
  showContentPage("none", "block", "none", "none");
});

function showContentPage(home, menu, about, contact) {
  main_content_home.style.display = home;
  main_content_menu.style.display = menu;
  main_content_about.style.display = about;
  main_content_contact.style.display = contact;
}
