
// Créer une fonction qui permettra de calculer les proportions par rapport au nombre de personnes

// A prendre en compte
    // valeur pour nombres de personnes doit être entier (prompt)
    // valeur pour Oeuf doit être entier (souci au niveau pâtisserie => pour aller plus loin, régler ce problème et adapter les autres ingrédients si oeuf à été ajouté ou supprimé : REALISME)

let choco = 250;
let vanille = 1;
let beurre = 150;
let oeufs = 3;
let sucre = 150;
let farine = 60;
let sel = 1;

console.log(`Voici les ingrédients d'un brownie pour 6 personnes :
${choco}g de chocolat
${vanille} sachet de sucre vanillé
${beurre}g de beurre
${oeufs} oeufs
${sucre}g de sucre
${farine}g de farine
${sel} pincée de sel`);

let personnes = parseInt(prompt(`Vous souhaitez préparer un brownie pour combien de personnes ?`));

if (true) {
    switch(personnes) {
        case 1:
            console.log(`Etes-vous sûr.e de vouloir faire un brownie pour 1 personne ... Gourmand ^^`);
            break;
        case 2:
            console.log(``);
    }
};
