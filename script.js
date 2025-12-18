const container = document.getElementById("container");

function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

   square.addEventListener("mouseenter", () => {
  if (!square.dataset.darkness) {
    // color RGB aleatorio inicial
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    square.dataset.r = r;
    square.dataset.g = g;
    square.dataset.b = b;
    square.dataset.darkness = 0;

    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  } else {
    // oscurecer 10%
    let darkness = Number(square.dataset.darkness) + 1;
    square.dataset.darkness = darkness;

    let r = Math.floor(square.dataset.r * Math.pow(0.9, darkness));
    let g = Math.floor(square.dataset.g * Math.pow(0.9, darkness));
    let b = Math.floor(square.dataset.b * Math.pow(0.9, darkness));

    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
});


    container.appendChild(square);
  }
}

// grid inicial 16x16
createGrid(16);
const resizeBtn = document.getElementById("resize-btn");

resizeBtn.addEventListener("click", () => {
  let newSize = prompt("¿Cuántos cuadrados por lado? (máx 100)");

  newSize = Number(newSize);

  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Ingresa un número entre 1 y 100");
  }
});
