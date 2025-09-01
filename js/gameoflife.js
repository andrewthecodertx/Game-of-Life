const cvs = document.querySelector("canvas");
const ctx = cvs.getContext("2d");

cvs.width = 800;
cvs.height = 600;

const res = 5; /* pixle size */

const columns = cvs.width / res;
const rows = cvs.height / res;

let gen = 0; /* keep track of Grids */
let running = true; /* flag to control simulation state */

/* the initial grid */
let grid = new Array(columns)
  .fill(null)
  .map(() =>
    new Array(rows).fill(null).map(() => Math.floor(Math.random() * 2))
  );

/* Start with initial (or last) grid and evaluate neighbors */
function createNextGenGrid(prevGrid) {
  const nextGrid = prevGrid.map((arr) => [...arr]);

  for (let column = 0; column < prevGrid.length; column++) {
    for (let row = 0; row < prevGrid[column].length; row++) {
      const cell = prevGrid[column][row];
      let neighbors = 0;

      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) {
            continue; /* nothing to see here */
          }

          const x = column + i;
          const y = row + j;

          if (x >= 0 && y >= 0 && x < columns && y < rows) {
            const neighbor = prevGrid[column + i][row + j];
            neighbors += neighbor;
          }
        }
      }

      if (cell === 1 && (neighbors < 2 || neighbors > 3))
        nextGrid[column][row] = 0;
      if (cell === 0 && neighbors === 3) nextGrid[column][row] = 1;
    }
  }

  return nextGrid;
}

function render(grid) {
  for (let column = 0; column < grid.length; column++) {
    for (let row = 0; row < grid[column].length; row++) {
      const cell = grid[column][row];

      ctx.beginPath();
      ctx.rect(column * res, row * res, res, res);
      ctx.fillStyle = cell ? "#000" : "#fff";
      ctx.fill();
    }
  }
}

function run() {
  if (running) {
    grid = createNextGenGrid(grid);
    gen++;
    render(grid);
  }
  requestAnimationFrame(run);
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case " ":
      running = !running;
      break;
    case "r":
      grid = new Array(columns)
        .fill(null)
        .map(() =>
          new Array(rows).fill(null).map(() => Math.floor(Math.random() * 2))
        );
      gen = 0;
      break;
    case "c":
      grid = grid.map((arr) => arr.fill(0));
      gen = 0;
      break;
  }
});

cvs.addEventListener("click", (event) => {
  const x = Math.floor(event.offsetX / res);
  const y = Math.floor(event.offsetY / res);

  if (x >= 0 && x < columns && y >= 0 && y < rows) {
    grid[x][y] = grid[x][y] === 0 ? 1 : 0;
  }
});

requestAnimationFrame(run);
