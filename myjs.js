// 1. Fonction nommée

function displayMessageFonctionNommee (surname) {
    const message =`1. Fonction nommée : Bonjour, ${surname}`;
    return message;
};

console.log (displayMessageFonctionNommee("Loïc"));



// 2. Fonction anonyme

/* Les fonctions anonymes sont très utilisées
 dans les environnements évènementiels*/

var displayMessageFonctionAnonyme = function (surname) {
    const message =`2. Fonction anonyme : Bonjour, ${surname}`;
    return message;
};

console.log (displayMessageFonctionAnonyme("Loïc"));
// appel de la fonction par la variable



// 3. Fonction fléchée (anonyme et concise)

var displayMessageFonctionFlechee = (surname) => {
    message =`3. Fonction fléchée : Bonjour, ${surname}`;
    return message;
};

console.log (displayMessageFonctionFlechee("Loïc"));