"use strict";

const DEFAULT_FILLING = 1;

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

    setOn(from, to) {
        for (let i = from.x; i <= to.x; i++) {
            for (let j = from.y; j <= to.y; j++) {
                this.setCell(i, j, DEFAULT_FILLING);
            }
        }
    }

    toggle(from, to) {
        for (let i = from.x; i <= to.x; i++) {
            for (let j = from.y; j <= to.y; j++) {
                this.setCell(
                    i,
                    j,
                    this.getCell(i, j) === DEFAULT_FILLING ? 0 : DEFAULT_FILLING
                );
            }
        }
    }
}

module.exports = { ChristmasLights, DEFAULT_FILLING };
