
// Créer une fonction qui permettra de calculer la proportion des ingrédients d'un brownie par rapport au nombre de personnes. Ex j'ai une quantité d'ingrédients standard pour 6 personnes. Je demande à la personne pour combien de personnes elle veut préparer le browniue. Et en conséquence, la recette m'affichera les bonnes quantité (proportionnalité)

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

// console.log(`Voici les ingrédients d'un brownie pour 6 personnes :
// ${choco}g de chocolat
// ${vanille} sachet de sucre vanillé
// ${beurre}g de beurre
// ${oeufs} oeufs
// ${sucre}g de sucre
// ${farine}g de farine
// ${sel} pincée de sel`);

let personnes = parseInt(prompt(`Vous souhaitez préparer un brownie pour combien de personnes ?`));

let calcul = () => {

    choco = Math.round((choco/6)*personnes);
    vanille = Math.round((vanille/6)*personnes);
    beurre = Math.round((beurre/6)*personnes);
    oeufs = Math.round((oeufs/6)*personnes);
    sucre = Math.round((sucre/6)*personnes);
    farine = Math.round((farine/6)*personnes);

    return (`brownie pour ${personnes} personnes :
    ${choco}g de chocolat
    ${vanille} sachet de sucre vanillé
    ${beurre}g de beurre
    ${oeufs} oeufs
    ${sucre}g de sucre
    ${farine}g de farine
    ${sel} pincée de sel`);
};

if (isNaN(personnes) != true) {
    
    console.log(calcul());
} 
else  {
    console.log(`Vous n'avez pas entré un chiffre`)
}
