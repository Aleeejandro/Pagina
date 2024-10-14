document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, email, mensaje })
        });

        const result = await response.text();
        alert(result);
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el mensaje. Inténtalo más tarde.');
    }
});
