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

// Formulário de contato — redireciona para WhatsApp
const WHATSAPP_NUMBER = '554196497526';
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const mensagem = form.mensagem.value.trim();

  const texto = `Olá! Meu nome é ${nome}.\n\nEquipamento e defeito:\n${mensagem}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank', 'noopener,noreferrer');
});