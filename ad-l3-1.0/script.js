function changingColor() {
  const colors = ['green', 'blue', 'red'];
  const elements = document.querySelectorAll('h5');

  elements.forEach(h5 => {
    h5.addEventListener('click', () => {
      const colorAleatory = colors[Math.floor(Math.random() * colors.length)];
      h5.style.backgroundColor = colorAleatory
    });
  });
}
changingColor()