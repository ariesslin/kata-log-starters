"use strict";

const { ChristmasLights, DEFAULT_FILLING } = require("./christmas-lights");
let lightGrid;

beforeEach(() => {
    lightGrid = new ChristmasLights(1000, 1000, 0);
});

it("should initialize lightGrid with given height and width", () => {
    expect(lightGrid.width).toBe(1000);
    expect(lightGrid.height).toBe(1000);
});

it("should get and set cell values", () => {
    lightGrid.setCell(2, 2, DEFAULT_FILLING);
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

it("toggle 0,0 through 999,0 would toggle the first line of 1000 lights,\
turning off the ones that were on, and turning on the ones that were off.", () => {
    lightGrid.setCell(0, 0, DEFAULT_FILLING);
    lightGrid.toggle({ x: 0, y: 0 }, { x: 999, y: 0 });

    expect(lightGrid.getCell(0, 0)).toBe(0);
    for (let i = 1; i < 1000; i++) {
        expect(lightGrid.getCell(i, 0)).toBe(DEFAULT_FILLING);
    }
});

it("turn off 499,499 through 500,500 would turn off (or leave off) the middle four lights.", () => {
    lightGrid.setCell(499, 499, DEFAULT_FILLING);
    lightGrid.setCell(499, 500, DEFAULT_FILLING);
    lightGrid.setOff({ x: 499, y: 499 }, { x: 500, y: 500 });

    for (let i = 499; i <= 500; i++) {
        for (let j = 499; j <= 500; j++) {
            expect(lightGrid.getCell(i, j)).toBe(0);
        }
    }
});
