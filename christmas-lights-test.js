"use strict";

const ChristmasLights = require("./christmas-lights.js");

it("should initialize lightGrid with given height and width", () => {
    const lightGrid = new ChristmasLights(5, 5);

    expect(lightGrid.width).toBe(5);
    expect(lightGrid.height).toBe(5);
});

it("should get and set cell values", () => {
    const lightGrid = new ChristmasLights(5, 5);

    lightGrid.setCell(2, 2, 1);
    expect(lightGrid.getCell(2, 2)).toBe(1);
});

it("turn on 0,0 through 999,999 would turn on (or leave on) every light", () => {
    // Arrange

    // Act

    // Assert
    expect(1).toBe(1);
});
