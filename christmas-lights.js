"use strict";

class ChristmasLights {
    #width;
    #height;
    #grid;

    constructor(width, height, defaultFilling = 0) {
        this.#width = width;
        this.#height = height;
        this.#grid = this.#initializeGrid(defaultFilling);
    }

    #initializeGrid(defaultFilling) {
        return new Array(this.#height)
            .fill(null)
            .map(() => new Array(this.#width).fill(defaultFilling));
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    getCell(i, j) {
        return this.#grid[i][j];
    }

    setCell(i, j, value) {
        this.#grid[i][j] = value;
    }
}

module.exports = ChristmasLights;
