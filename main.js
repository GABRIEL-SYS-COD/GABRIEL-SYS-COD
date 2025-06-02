document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to your backend
    console.log('Form submitted:', { name, email, subject, message });
    
    // Clear the form
    this.reset();
    alert('Thank you for your message! We will get back to you soon.');
});