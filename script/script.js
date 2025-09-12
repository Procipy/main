
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






const emConstrucaoIcon = '<img src="img/R.svg" alt="Em Construção" class="em-construcao-icon"/>'


function moverConteudo(Classe_div) {
    // pega a div de origem (primeira que encontrar)
    const origem = document.querySelectorAll(`.${Classe_div}`);

    if (origem.length > 0) {
      for (const div of origem) {
        // transfere o conteúdo HTML
        div.querySelector('.resumo-texto').innerHTML = emConstrucaoIcon;
      }
    }
  }

  // exemplo de uso
  moverConteudo("em-construcao");