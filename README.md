# Conway's Game of Life

Conway's Game of Life is a classic cellular automaton devised by mathematician
John Conway. It is a zero-player game, meaning that its evolution is determined
by its initial state, with no further input from users. The game involves a grid
of cells, each of which can be either alive or dead.

## Algorithm

The algorithm for Conway's Game of Life involves the following key steps:

1. **Initialization:**
   - Create an initial grid of cells with each cell in either an
   alive (1) or dead (0) state.

2. **Rules for Evolution:**
   - For each cell in the grid, count the number of alive neighbors
   (cells in adjacent positions).
   - Apply the following rules to determine the new state of each cell:
     - If a cell is alive and has 2 or 3 alive neighbors, it survives;
     otherwise, it dies.
     - If a cell is dead and has exactly 3 alive neighbors, it becomes
     alive; otherwise, it remains dead.

3. **Update:**
   - Replace the current grid with the newly computed grid based on the rules.

4. **Rendering:**
   - Visualize the grid, where alive cells are typically represented by
   filled squares, and dead cells are represented by empty squares.

5. **Repeat:**
   - Repeat the process for each generation, creating an animation that
   shows how the state of the grid evolves over time.

## Usage

To run Conway's Game of Life, follow these steps:

1. Open the HTML file in a web browser.
2. The game will start running, and you will see the evolution
of the grid based on the rules.

Feel free to experiment with different initial configurations and
observe the patterns that emerge over time.

## Example

You can find a working example of Conway's Game of Life in the
provided JavaScript code and HTML file.

## References

- [Wikipedia - Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

## License

This project is licensed under the MIT License - see the
[LICENSE](LICENSE) file for details.
