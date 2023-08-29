"use strict";

const { ChristmasLights, DEFAULT_FILLING } = require("./christmas-lights");
const width = 1000;
const height = 1000;
const lightGrid = new ChristmasLights(width, height, 0);

// turn on 887,9 through 959,629
lightGrid.setOn({ x: 887, y: 9 }, { x: 959, y: 629 });

// turn on 454,398 through 844,448
lightGrid.setOn({ x: 454, y: 398 }, { x: 844, y: 448 });

// turn off 539,243 through 559,965
lightGrid.setOff({ x: 539, y: 243 }, { x: 559, y: 965 });

// turn off 370,819 through 676,868
lightGrid.setOff({ x: 370, y: 819 }, { x: 676, y: 868 });

// turn off 145,40 through 370,997
lightGrid.setOff({ x: 145, y: 40 }, { x: 370, y: 997 });

// turn off 301,3 through 808,453
lightGrid.setOff({ x: 301, y: 3 }, { x: 808, y: 453 });

// turn on 351,678 through 951,908
lightGrid.setOn({ x: 351, y: 678 }, { x: 951, y: 908 });

// toggle 720,196 through 897,994
lightGrid.toggle({ x: 720, y: 196 }, { x: 897, y: 994 });

// toggle 831,394 through 904,860
lightGrid.toggle({ x: 831, y: 394 }, { x: 904, y: 860 });

// After following the instructions, how many lights are lit?
let totalLightsOn = 0;
for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
        totalLightsOn += lightGrid.getCell(i, j) === DEFAULT_FILLING ? 1 : 0;
    }
}

console.log(totalLightsOn);
