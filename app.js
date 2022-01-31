const button = document.querySelector('button');

function fToggle() {
    console.log("Click du button.");
    button.classList.toggle('altColor');
}

// Appel direct
//fToggle();

// Utilisation d'un callback - OK
//button.addEventListener('click', fToggle);

// Utilisation d'un appel direct ! KO !!! La fonction est déclenchée lors de l'évaluation
//button.addEventListener('click', fToggle());

// Autre syntaxe OK
// button.addEventListener('click', function() {
//     console.log("Click du button.");
//     button.classList.toggle('altColor');
// });
// Autre syntaxe OK
button.addEventListener('click', () => {
    console.log("Click du button.");
    button.classList.toggle('altColor');
});

// ----------------------------------
// ASYNC +  Comment passer les paramètres à une fonction de callback ?
// ----------------------------------
function firstAction(callback) {
    console.log("First action");
    setTimeout(callback, 2000);
}

function secondAction() {
    console.log("Second action");
}

//setTimeout(firstAction(secondAction), 5000);
// KO!!!  "First action" est affiché instantanément car évalué !

// Solution : utiliser "() => " fonction anonyme de callback
setTimeout(() => firstAction(secondAction), 5000);


