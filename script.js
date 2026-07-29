// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--open');
});

// Fecha o menu ao clicar em um link (mobile)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('nav--open'));
});

// Formulário de contato (exemplo — troque pelo seu endpoint real)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Aqui você conecta com seu backend, EmailJS, Formspree, etc.
  // Exemplo com fetch:
  // fetch('https://seu-endpoint.com/contato', {
  //   method: 'POST',
  //   body: new FormData(form)
  // });

  status.textContent = 'Mensagem enviada! Entraremos em contato em breve.';
  form.reset();
});