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
  const divBackground = document.createElement("div");
  const h1 = document.createElement("h1");

  h1.textContent = "Contacto";

  divBackground.classList.add("image-waitress-background");
  divBackground.appendChild(h1);

  section.appendChild(divBackground);
  return section;
}

function createSectionForm() {
  const section = document.createElement("section");
  const divContainer = document.createElement("div");

  divContainer.classList.add("container-form");
  divContainer.appendChild(createRestaurantInfo());
  divContainer.appendChild(createForm());

  section.classList.add("form-contact");
  section.appendChild(divContainer);
  return section;
}

function createRestaurantInfo() {
  const restaurantInfo = document.createElement("div");

  restaurantInfo.setAttribute("id", "restaurant-info");
  restaurantInfo.innerHTML = `
   <div>
      <i class="fa-regular fa-compass"></i>
      <address>Av. Morelia 6845, Lino Vargas, 32663, Cd Juárez, Chih.</address>
   </div>
   <div>
      <i class="fa-regular fa-clock"></i>
      <p>
        Abierto desde <time>10:00</time> a.m. hasta <time>9:00</time> p.m. todos los días!
      </p>
   </div>
   <div>
      <i class="fa-solid fa-phone"></i>
      <p>(656)-123-0213</p>
   </div>`;

  return restaurantInfo;
}

function createForm() {
  const form = document.createElement("form");
  const formTitle = document.createElement("div");
  const formContent = document.createElement("div");
  const btnSubmit = document.createElement("button");

  formTitle.classList.add("form-title");

  formTitle.innerHTML = `
    <i class="fa-solid fa-envelope"></i>
    <h3>Tu opinión importa</h3>`;

  formContent.innerHTML = `
    <input
    type="text"
    id="full-name"
    name="full-name"
    placeholder="Nombre completo"
    required
    />
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Correo electrónico"
      required
    />
    <textarea
      name="message"
      id="message"
      cols="30"
      rows="10"
      required
      placeholder="Escribe tus comentarios..."
    ></textarea>`;

  btnSubmit.setAttribute("type", "submit");
  btnSubmit.textContent = "Enviar";

  form.appendChild(formTitle);
  form.appendChild(formContent);
  form.appendChild(btnSubmit);

  return form;
}

export { createContentContactUs };
