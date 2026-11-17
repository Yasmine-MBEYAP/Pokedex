
function afficherCartes(liste) {
    const grille = document.getElementById("grille");
    grille.replaceChildren();

    liste.forEach((pokemon) => {
        const carte = document.createElement("article");
        carte.className = "carte-pokemon";

       const image = document.createElement("img");
        image.src = pokemon.image;
        image.alt = pokemon.nom;

        const titre = document.createElement("h2");
        titre.textContent = pokemon.nom;

        const numero = document.createElement("p");
        numero.textContent = "N° " + String(pokemon.numero).padStart(4, "0");

        const type = document.createElement("p");
        type.textContent = "Type : " + pokemon.type;

        const lien = document.createElement("a");
        lien.textContent = "Voir les détails";
        lien.href = "details.html?id=" + pokemon.numero;

        carte.appendChild(image);
        carte.appendChild(titre);
        carte.appendChild(numero);
        carte.appendChild(type);
        carte.appendChild(lien);

        grille.appendChild(carte);
    });
}

// affichage initial de tous les Pokémon
afficherCartes(pokemons);

// pour la gestion de la recherche en temps réel
const champRecherche = document.getElementById("recherche");
champRecherche.addEventListener("input", () => {
    const listeFiltree = rechercherParNom(champRecherche.value);
    afficherCartes(listeFiltree);
});