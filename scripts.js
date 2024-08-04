document.addEventListener('DOMContentLoaded', () => {
    // Manejo del selector de sesiones
    const sessionSelect = document.getElementById('session-select');
    const sessionContents = document.querySelectorAll('.session-content');

    sessionSelect.addEventListener('change', () => {
        const selectedSession = sessionSelect.value;
        sessionContents.forEach(content => {
            content.style.display = content.id === selectedSession ? 'block' : 'none';
        });
    });

    // Manejo del formulario de contacto
    const contactoForm = document.getElementById('contacto-form');
    contactoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        Toastify({
            text: "¡Gracias por tu mensaje! Te responderemos pronto.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
        contactoForm.reset();
    });

    // Animación de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación del logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'rotate(360deg)';
        logo.style.transition = 'transform 0.5s ease';
    });
    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'rotate(0deg)';
    });
});

// Función de redirección con notificación
function redirectAndNotify() {
    Toastify({
        text: "Redirigiendo...",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();

    setTimeout(() => {
        window.location.href = "https://www.churchofjesuschrist.org/youth/childrenandyouth/fsy/sessions?country=cl&lang=spa";
    }, 3000);
}