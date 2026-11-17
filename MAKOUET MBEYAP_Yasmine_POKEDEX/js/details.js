const params = new URLSearchParams(window.location.search); 
const numero = Number(params.get("id")); 
const pokemon = rechercherParNumero(numero); 

if (pokemon !== undefined) {
    document.getElementById("nom").textContent = pokemon.nom;
    document.getElementById("image").src = pokemon.image;
    document.getElementById("image").alt = pokemon.nom;
    document.getElementById("numero").textContent = "Numéro : " + pokemon.numero;
    document.getElementById("type").textContent = "Type : " + pokemon.type;
    document.getElementById("taille").textContent = "Taille : " + pokemon.taille + " m";
    document.getElementById("poids").textContent = "Poids : " + pokemon.poids + " kg";

    document.getElementById("pv").style.width = Math.min(pokemon.pv, 100) + "%";
    document.getElementById("attaque").style.width = Math.min(pokemon.attaque, 100) + "%";
    document.getElementById("defense").style.width = Math.min(pokemon.defense, 100) + "%";
} else {
    document.getElementById("nom").textContent = "Pokémon introuvable";
    // on cache l'image et le badge vides
    document.getElementById("image").style.display = "none";
    document.getElementById("type").style.display = "none";
}