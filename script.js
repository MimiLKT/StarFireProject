const starContainer = document.querySelector('.stars-background');

// Crée 50 étoiles aléatoires
for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  
  // Position et taille aléatoires
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  const size = Math.random() * 3 + 1; // Taille entre 1px et 4px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  starContainer.appendChild(star);
}
