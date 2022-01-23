const button = document.querySelector('button');

function fToggle() {
    console.log("Click du button --> button.classList.toggle(..)");
    button.classList.toggle('altColor');
}

// Appel direct
//fToggle();

// Utilisation d'un callback - OK
button.addEventListener('click', fToggle);

// Utilisation d'un appel direct ! KO !!!
//button.addEventListener('click', fToggle());

// Comment passer les paramètres à une fonction de callback ?