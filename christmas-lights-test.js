"use strict";

const { ChristmasLights, DEFAULT_FILLING } = require("./christmas-lights");
let lightGrid;

beforeEach(() => {
    lightGrid = new ChristmasLights(1000, 1000, DEFAULT_FILLING);
});

it("should initialize lightGrid with given height and width", () => {
    expect(lightGrid.width).toBe(1000);
    expect(lightGrid.height).toBe(1000);
});

it("should get and set cell values", () => {
    lightGrid.setCell(2, 2, 1);
    expect(lightGrid.getCell(2, 2)).toBe(DEFAULT_FILLING);
});

it("turn on 0,0 through 999,999 would turn on (or leave on) every light", () => {
    lightGrid.setOn({ x: 0, y: 0 }, { x: 999, y: 999 });

    for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 1000; j++) {
            expect(lightGrid.getCell(i, j)).toBe(DEFAULT_FILLING);
        }
    }
});
