import "./styles.css";

function createContentContactUs() {
  const main = document.createElement("main");

  main.classList.add("main-contact");

  main.appendChild(createSectionTitle());
  main.appendChild(createSectionForm());

  main.style.display = "none";

  return main;
}

function createSectionTitle() {
  const section = document.createElement("section");
  const div_background = document.createElement("div");
  const h1 = document.createElement("h1");

  h1.textContent = "Contact us";

  div_background.classList.add("image-waitress-background");
  div_background.appendChild(h1);

  section.appendChild(div_background);
  return section;
}

function createSectionForm() {
  const section = document.createElement("section");
  const div_container = document.createElement("div");

  div_container.classList.add("container-form");
  div_container.appendChild(createRestaurantInfo());
  div_container.appendChild(createForm());

  section.classList.add("form-contact");
  section.appendChild(div_container);
  return section;
}

function createRestaurantInfo() {
  const div_info = document.createElement("div");

  div_info.setAttribute("id", "restaurant-info");
  div_info.innerHTML = `
   <div>
      <i class="fa-regular fa-compass"></i>
      <address>1200 AVENUE OF THE AMERICAS #A , NEW YORK, NY</address>
   </div>
   <div>
      <i class="fa-regular fa-clock"></i>
      <p>
        Open from <time>10:00</time> to <time>21:00</time> every day.
      </p>
   </div>
   <div>
      <i class="fa-solid fa-phone"></i>
      <p>(123)-456-7899</p>
   </div>`;

  return div_info;
}

function createForm() {
  const form = document.createElement("form");
  const div_form_title = document.createElement("div");
  const div_form_content = document.createElement("div");
  const submit = document.createElement("button");

  div_form_title.classList.add("form-title");

  div_form_title.innerHTML = `
    <i class="fa-solid fa-envelope"></i>
    <h3>Message us</h3>`;

  div_form_content.innerHTML = `
    <input
    type="text"
    id="full-name"
    name="full-name"
    placeholder="Full name"
    required
    />
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      required
    />
    <textarea
      name="message"
      id="message"
      cols="30"
      rows="10"
      required
      placeholder="Type your comments..."
    ></textarea>`;

  submit.setAttribute("type", "submit");
  submit.textContent = "Send";

  form.appendChild(div_form_title);
  form.appendChild(div_form_content);
  form.appendChild(submit);

  return form;
}

export { createContentContactUs };
