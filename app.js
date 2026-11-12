const produits = [
  { nom: "Clavier", quantite: 5 },
  { nom: "Souris", quantite: 8 },
  { nom: "Écran", quantite: 3 }
];

const liste = document.querySelector("#liste-produit");
const formulaire = document.querySelector("#formulaire");
const champNom = document.querySelector("#nom");
const champQuantite = document.querySelector("#quantite");
const champRecherche = document.querySelector("#recherche");
const message = document.querySelector("#message");
const total = document.querySelector("#total");

function afficherProduits() {
  liste.innerHTML = "";
  const recherche = champRecherche.value.trim().toLowerCase();
  const resultats = produits.filter(function (produit) {
    return produit.nom.toLowerCase().includes(recherche);
  });

  resultats.forEach(function (produit) {
    const element = document.createElement("li");
    element.textContent = produit.nom + " — Quantité : " + produit.quantite;
    liste.appendChild(element);
  });

  if (resultats.length === 0) {
    const element = document.createElement("li");
    element.textContent = "Aucun matériel trouvé";
    liste.appendChild(element);
  }

  let quantiteTotale = 0;
  produits.forEach(function (produit) {
    quantiteTotale = quantiteTotale + produit.quantite;
  });
  total.textContent = quantiteTotale;
}

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  const nom = champNom.value.trim();
  const quantite = champQuantite.value;

  if (nom === "" && champQuantite.value === "") {
    message.textContent = "Renseignez le nom et la quantité.";
    return;
  }

  if (!Number.isInteger(Number(quantite)) || Number(quantite) <= 0) {
    message.textContent = "La quantité doit être un entier supérieur à zéro.";
    return;
  }

  produits.push({ nom: nom, quantite: quantite });
  message.textContent = "Matériel ajouté.";
  formulaire.reset();
  champRecherche.value = "";
});

champRecherche.addEventListener("change", afficherProduits);
afficherProduits();
