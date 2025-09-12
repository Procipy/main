
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); //Adiciona a Classe de Visível
      // Optional: stop observing after first appearance
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2 // Trigger when 10% is visible
});

document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});
