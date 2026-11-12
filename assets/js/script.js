const slides = [
  { titolo: "Saldi di primavera", sottotitolo: "Fino al 30% su tutto", colore: "primary" },
  { titolo: "Nuovi arrivi", sottotitolo: "Scopri le novità della stagione", colore: "success" },
  { titolo: "Spedizione gratis", sottotitolo: "Per ordini sopra i 50 €", colore: "dark" }
];

// Catalogo: 6 prodotti, 2 per categoria (totale 269 €)
const prodotti = [
  { id: 1, nome: "Sneakers Run", prezzo: 79, categoria: "scarpe", descrizione: "Scarpe sportive leggere e comode.", img: "https://placehold.co/300x180" },
  { id: 2, nome: "Stivaletti Pelle", prezzo: 59, categoria: "scarpe", descrizione: "Stivaletti eleganti in vera pelle.", img: "https://placehold.co/300x180" },
  { id: 3, nome: "Giacca Urban", prezzo: 49, categoria: "abbigliamento", descrizione: "Giacca leggera per la mezza stagione.", img: "https://placehold.co/300x180" },
  { id: 4, nome: "Felpa Comfort", prezzo: 39, categoria: "abbigliamento", descrizione: "Felpa morbida in cotone.", img: "https://placehold.co/300x180" },
  { id: 5, nome: "Zaino City", prezzo: 25, categoria: "accessori", descrizione: "Zaino spazioso e resistente.", img: "https://placehold.co/300x180" },
  { id: 6, nome: "Cappello Sole", prezzo: 18, categoria: "accessori", descrizione: "Cappello con visiera, perfetto per l'estate.", img: "https://placehold.co/300x180" }
];

const slidesContainer = document.getElementById("slides-container");
const contenitoreProdotti = document.getElementById("contenitore-prodotti");
const contatore = document.getElementById("contatore");
const totale = document.getElementById("totale");

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

// Disegna le card dei prodotti nella lista ricevuta e aggiorna il contatore
function renderProdotti(lista) {
  contenitoreProdotti.innerHTML = lista.map(p => `
    <article class="col-12 col-sm-6 col-xl-4 mb-3">
      <div class="card h-100 ${p.categoria}">
        <img src="${p.img}" class="card-img-top" alt="${p.nome}">
        <div class="card-body">
          <h5 class="card-title">${p.nome}</h5>
          <p class="card-text">${p.descrizione}</p>
          <p class="fw-bold fs-5 m-0">€ ${p.prezzo}</p>
        </div>
      </div>
    </article>`).join("");

  contatore.textContent = lista.length;
}

// Somma i prezzi dei prodotti della lista con reduce
function calcolaTotale(lista) {
  return lista.reduce((somma, p) => somma + p.prezzo, 0);
}

// Filtri: un solo listener sul contenitore (event delegation)
document.getElementById("filtri").addEventListener("click", (e) => {
  const bottone = e.target.closest("[data-categoria]");
  if (!bottone) return;

  // sposta la classe active sul bottone cliccato
  document.querySelectorAll("#filtri .btn").forEach(b => b.classList.remove("active"));
  bottone.classList.add("active");

  const categoria = bottone.dataset.categoria;
  const filtrati = categoria === "tutti" ? prodotti : prodotti.filter(p => p.categoria === categoria);
  renderProdotti(filtrati);
});

// Avvio: mostra tutto il catalogo e il suo totale
renderProdotti(prodotti);
totale.textContent = `Totale catalogo: € ${calcolaTotale(prodotti)}`;

const toggle = document.getElementById("toggle-tema");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "Tema chiaro" : "Tema scuro";
});
