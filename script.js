// Menú móvil accesible
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.getAttribute('data-open') === 'true';
    menu.setAttribute('data-open', String(!open));
    toggle.setAttribute('aria-expanded', String(!open));
  });
}

// Validación simple del formulario + mailto
const form = document.getElementById('form-contacto');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !correo || !mensaje) {
      status.textContent = 'Por favor, completa todos los campos.';
      status.style.color = '#b91c1c';
      return;
    }

    status.textContent = '¡Gracias! Abriendo tu cliente de correo…';
    status.style.color = '#065f46';

    const asunto = encodeURIComponent(`Contacto desde Tech4All — ${nombre}`);
    const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`);
    window.location.href = `mailto:info@tech4all.org?subject=${asunto}&body=${cuerpo}`;

    form.reset();
    setTimeout(()=> status.textContent = '', 5000);
  });
}
