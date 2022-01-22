const button = document.querySelector('button');

function toggle() {
    button.classList.toggle('altColor');
}

toggle();
toggle();

// Utilisation d'un callback
button.addEventListener('click', toggle);

