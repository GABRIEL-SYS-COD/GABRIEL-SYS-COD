document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Aquí normalmente enviarías estos datos al backend
    console.log('Formulario enviado:', { name, email, subject, message });
    
    // Limpiar el formulario
    this.reset();
    alert('¡Gracias por tu mensaje! Te responderemos pronto.');
});