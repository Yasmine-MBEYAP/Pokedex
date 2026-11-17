/* pour afficher les cartes sur la pages d'acceuil, en gros faire le lien avec le fichier image */
const pokemons = [
    {
        numero: 25,
        nom: "Pikachu",
        type: "Électrik",
        image: "images/Pikachu.png",
        taille: 0.4,
        poids: 6.0,
        pv: 35,
        attaque: 55,
        defense: 40
    },
    {
        numero: 373,
        nom: "Drattak",
        type: "Dragon / Vol",
        image: "images/Drattak.png",
        taille: 1.5,
        poids: 102.6,
        pv: 95,
        attaque: 135,
        defense: 80
    },
    {
        numero: 105,
        nom: "Ossatueur",
        type: "Sol",
        image: "images/marowak.png",
        taille: 1.0,
        poids: 45.0,
        pv: 60,
        attaque: 80,
        defense: 110
    },
    {
        numero: 445,
        nom: "Carchacrok",
        type: "Dragon / Sol",
        image: "images/carchacrok.png",
        taille: 1.9,
        poids: 95.0,
        pv: 108,
        attaque: 130,
        defense: 95
    },
    {
        numero: 501,
        nom: "Moustillon",
        type: "Eau",
        image: "images/moustillon.png",
        taille: 0.5,
        poids: 5.9,
        pv: 55,
        attaque: 55,
        defense: 45
    },
    {
        numero: 37,
        nom: "Goupix",
        type: "Feu",
        image: "images/Goupix.png",
        taille: 0.6,
        poids: 9.9,
        pv: 38,
        attaque: 41,
        defense: 40
    },
    {
        numero: 202,
        nom: "Qulbutoké",
        type: "Psy",
        image: "images/Qulbutoké.png",
        taille: 1.3,
        poids: 28.5,
        pv: 190,
        attaque: 33,
        defense: 58
    },
    {
        numero: 6,
        nom: "Dracaufeu",
        type: "Feu / Vol",
        image: "images/Dracaufeu.png",
        taille: 1.7,
        poids: 90.5,
        pv: 78,
        attaque: 84,
        defense: 78
    },
    {
        numero: 908,
        nom: "Miascarade",
        type: "Plante / Ténèbres",
        image: "images/miascarade.png",
        taille: 1.5,
        poids: 31.2,
        pv: 76,
        attaque: 110,
        defense: 70
    },
    {
        numero: 55,
        nom: "Akwakwak",
        type: "Eau",
        image: "images/akwakwak.png",
        taille: 1.7,
        poids: 76.6,
        pv: 80,
        attaque: 82,
        defense: 78
    },
    {
        numero: 807,
        nom: "Zeraora",
        type: "Électrik",
        image: "images/zeraora.png",
        taille: 1.5,
        poids: 44.5,
        pv: 88,
        attaque: 112,
        defense: 75
    },
    {
        numero: 7,
        nom: "Carapuce",
        type: "Eau",
        image: "images/Carapuce.png",
        taille: 0.5,
        poids: 9.0,
        pv: 44,
        attaque: 48,
        defense: 65
    }
];

// console.log("Nombre de Pokémon :", pokemons.length);

function afficherPokemons() {
    pokemons.forEach(pokemon => {
        console.log("N°", pokemon.numero, "-", pokemon.nom);
    });
}

function rechercherParNumero(numero) {
    return pokemons.find(pokemon => pokemon.numero === numero);
}

// Tests de la partie 2 (mis en commentaire pour ne pas encombrer la console)
// afficherPokemons();

// console.log(rechercherParNumero(25));
// console.log(rechercherParNumero(999));

function rechercherParNom(saisie) {
    const nomRecherche = saisie.trim().toLowerCase();

    return pokemons.filter(pokemon =>
        pokemon.nom.toLowerCase().includes(nomRecherche));
}

// console.log(rechercherParNom("Pikachu"));
// console.log(rechercherParNom("PIKA"));
// console.log(rechercherParNom("xyz"));

function filtrerParType(type) {
    const typeRecherche = type.trim().toLowerCase();

    return pokemons.filter(pokemon =>
        pokemon.type.toLowerCase().includes(typeRecherche)
    );
}

// console.log(filtrerParType("Eau"));
// console.log(filtrerParType("Dragon"));
// console.log(filtrerParType("FEU"));
// console.log(filtrerParType("Plante"));
// console.log(filtrerParType("Électrik"));
// console.log(filtrerParType("Vol"));

function obtenirNoms() {
    return pokemons.map(pokemon => pokemon.nom);
}

// console.log(obtenirNoms());

function afficherDetails(numero) {
    const pokemon = rechercherParNumero(numero);

    if (pokemon === undefined) {
        console.log("Aucun Pokémon trouvé !");
        return;
    }

    console.log("Nom :", pokemon.nom);
    console.log("Numéro :", pokemon.numero);
    console.log("Type :", pokemon.type);
    console.log("Taille :", pokemon.taille, "m");
    console.log("Poids :", pokemon.poids, "kg");
    console.log("PV :", pokemon.pv);
    console.log("Attaque :", pokemon.attaque);
    console.log("Défense :", pokemon.defense);
}

// afficherDetails(25);
// afficherDetails(999);
