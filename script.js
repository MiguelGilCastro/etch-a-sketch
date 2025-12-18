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
      square.style.backgroundColor = "black";
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
