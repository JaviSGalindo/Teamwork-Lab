function cambiarColor() {
  const colores = ['green', 'blue', 'red'];
  const elementosH5 = document.querySelectorAll('h5');

  elementosH5.forEach(h5 => {
    h5.addEventListener('click', () => {
      const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      h5.style.backgroundColor = colorAleatorio;
    });
  });
}