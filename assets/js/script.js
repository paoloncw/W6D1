const slides = [
  { titolo: "Saldi di primavera", sottotitolo: "Fino al 30% su tutto", colore: "primary" },
  { titolo: "Nuovi arrivi", sottotitolo: "Scopri le novità della stagione", colore: "success" },
  { titolo: "Spedizione gratis", sottotitolo: "Per ordini sopra i 50 €", colore: "dark" }
];

const prodotti = [
  { nome: "giacca Gucci", prezzo: "99,50$", descrizione: "Giacca elegante in tessuto pregiato." },
  { nome: "borsa Birkin", prezzo: "65,90$", descrizione: "Borsa spaziosa e resistente." },
  { nome: "scarpe Nike", prezzo: "535,90$", descrizione: "Scarpe sportive leggere e comode." },
  { nome: "calze Prada", prezzo: "63,90$", descrizione: "Calze morbide per tutti i giorni." }
];

prodotti.sort(() => Math.random() - 0.5);

const slidesContainer = document.getElementById("slides-container");
const prodottiContainer = document.getElementById("prodotti-container");
const modalsContainer = document.getElementById("modals-container");

slides.forEach((slide, i) => {

  const active = i === 0 ? "active" : "";
  slidesContainer.innerHTML += `
    <div class="carousel-item ${active}">
      <div class="bg-${slide.colore} text-white text-center py-5">
        <div class="container">
          <h2 class="fs-1 fw-bold mb-2">${slide.titolo}</h2>
          <p class="fs-5 m-0">${slide.sottotitolo}</p>
        </div>
      </div>
    </div>`;
});

prodotti.forEach((p, i) => {
  const id = `prodotto-${i + 1}`;

  prodottiContainer.innerHTML += `
    <article class="col-12 col-sm-6 col-xl-4 col-xxl-3">
      <div class="card h-100 shadow-sm">
        <img src="https://placehold.co/300x180" class="card-img-top" alt="${p.nome}">
        <div class="card-body">
          <h5 class="card-title">${p.nome}</h5>
          <p class="card-text text-body-secondary">${p.descrizione}</p>
          <p class="fw-bold fs-5 m-0">${p.prezzo}</p>
        </div>
        <div class="card-footer bg-white border-0">
          <button type="button" class="btn btn-primary w-100"
                  data-bs-toggle="modal" data-bs-target="#${id}">Dettagli</button>
        </div>
      </div>
    </article>`;

  modalsContainer.innerHTML += `
    <div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="${id}-title" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="${id}-title">${p.nome}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Chiudi"></button>
          </div>
          <div class="modal-body">
            <img src="https://placehold.co/600x300" class="img-fluid mb-3" alt="${p.nome}">
            <p>${p.descrizione}</p>
            <p class="fw-bold fs-4 m-0">${p.prezzo}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
            <button type="button" class="btn btn-success">Aggiungi al carrello</button>
          </div>
        </div>
      </div>
    </div>`;
});
