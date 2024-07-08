document.addEventListener('DOMContentLoaded', function() {
    function actualizarReloj() {
        const reloj = document.getElementById('reloj');
        const horaActual = new Date();

        const horas = horaActual.getHours().toString().padStart(2, '0');
        const minutos = horaActual.getMinutes().toString().padStart(2, '0');
        const segundos = horaActual.getSeconds().toString().padStart(2, '0');
        
        const tiempo = `${horas}:${minutos}:${segundos}`;
        reloj.textContent = tiempo;
        
        // Mostrar la hora actual en la consola
        console.log(`Hora actual: ${tiempo}`);
    }

    // Actualizar el reloj inmediatamente al cargar la página
    actualizarReloj();

    // Actualizar el reloj cada segundo
    setInterval(actualizarReloj, 1000);
});

setTimeout(function() {
    location.reload();
}, 10000);

(function() {
    'use strict';
    alert("Modo de funcionamiento: Estricto");
})();