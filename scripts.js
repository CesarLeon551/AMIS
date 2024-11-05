document.querySelectorAll('.level').forEach(level => {
    level.addEventListener('click', function() {
        const minigameId = this.id === 'level1' ? 'friendship-cabin' :
                           this.id === 'level2' ? 'fear-mountain' :
                           this.id === 'level3' ? 'uncertainty-river' :
                           this.id === 'level4' ? 'doubt-forest' :
                           this.id === 'level5' ? 'bravery-city' :
                           this.id === 'level6' ? 'trust-sea' : '';

        const currentMinigame = document.getElementById(minigameId);

        // Toggle visibility
        if (currentMinigame.classList.contains('show')) {
            currentMinigame.classList.remove('show'); // Ocultar si ya está visible
        } else {
            // Ocultar todos los minijuegos
            document.querySelectorAll('.minigame').forEach(minigame => {
                minigame.classList.remove('show');
                minigame.style.opacity = 0; // Asegurarse de que el minijuego no sea visible
            });
            currentMinigame.classList.add('show'); // Mostrar el minijuego correspondiente
            currentMinigame.style.opacity = 1; // Hacer visible el minijuego
        }
    });
});

// Funciones de cada minijuego
function checkFriendshipAnswer(option) {
    const correctAnswer = 3; // La opción correcta es la 3
    if (option === correctAnswer) {
        alert("¡Correcto! La amistad se celebra con risas y buenos momentos.");
        const minigame = document.getElementById('friendship-cabin');
        minigame.classList.add('fade-out'); // Añade la clase de desvanecimiento
        setTimeout(() => {
            minigame.classList.remove('show'); // Después de la transición, oculta el minijuego
        }, 500); // 500 ms para coincidir con la duración de la transición
    } else {
        alert("Incorrecto. Recuerda que la amistad se basa en momentos felices.");
    }
}

function getFearAdvice() {
    const fear = document.getElementById('fear-selection').value;
    let advice = '';
    switch (fear) {
        case '1':
            advice = "Wenas, Bienvenida al Psicologo, Titulo en Valer Madres, una vez hecho reir, solo quiero decir"+
			"que no tienes que tener mejor cuerpo para gustarle a las personas, te podria decir cosas que me gustan de el"+ 
			"pero se estaria haciendo muy largo, solo dire has visto los ojasos que te cargas :3";
            break;
        case '2':
            advice = "Cierto tienes un caracter muy intenso y tomamos decisiones a la brava, pero sin el no seriamos lo que somos,"+
			"y de cierta manera me gusta, aunque nos la pasamos peleando, ambos sabemos que estamos el uno para el otro"+ 
			"sin importar lo enojados que estemos";
            break;
        case '3':
            advice = "Vaya no pense que pondrias este, ahora que digo XD, Solo quiero decirte algo que no me animo a la cara,"+
			"Animate prometo cambiar para no dejar que pasen las cosas a la ligera, y si tienes miedo de encariñarte"+
			"y alejarte, porque alejarte, igual y me pasa lo mismo?";
            break;
        default:
            advice = 'Selecciona un miedo para recibir un consejo.';
            break;
    }
    alert(advice);
}

function flipCard(cardNumber) {
    alert("Has volteado la carta " + cardNumber);
    // Aquí podrías implementar la lógica para encontrar pares
}

function checkDoubtAnswer(answer) {
    if (answer) {
        alert("Estas pero.... Como que si, quien me crees");
        const minigame = document.getElementById('doubt-forest');
        minigame.classList.add('fade-out'); // Añade la clase de desvanecimiento
        setTimeout(() => {
            minigame.classList.remove('show'); // Después de la transición, oculta el minijuego
        }, 500); // 500 ms para coincidir con la duración de la transición
    } else {
        alert("Obvio yo naci para chingarte y dar lata y haci sera por el resto de los siglos.");
    }
}

function checkBraveryAnswer(answer) {
    if (answer) {
        alert("No lo dudes, una vez adentro resolvemos ambos, no te dejare undirte sola");
        const minigame = document.getElementById('bravery-city');
        minigame.classList.add('fade-out'); // Añade la clase de desvanecimiento
        setTimeout(() => {
            minigame.classList.remove('show'); // Después de la transición, oculta el minijuego
        }, 500); // 500 ms para coincidir con la duración de la transición
    } else {
        alert("Entonces no sigas con lo siguiente y mandame mensaje");
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.innerHTML);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.innerHTML += "<div>" + data + "</div>"; // Añade la palabra arrastrada a la zona de caída
}
