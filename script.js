        // Selecciona el botón
        const boton = document.getElementById('Boton');

        // Agrega la sombra al pasar el mouse
        boton.addEventListener('mouseover', () => {
            boton.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.2)';
        });

        // Remueve la sombra cuando el mouse se va
        boton.addEventListener('mouseout', () => {
            boton.style.boxShadow = 'none';
        });