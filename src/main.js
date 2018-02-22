var input = require("./input.json");
var DTable = require("./d-table");
var stretchCell = require("StretchCell");
var TCell = require("t-cell");

debugger;

var table = new DTable();
console.log(table.drawAllTable(input));
var sc = new stretchCell(new TCell("abc"), 1,2);
console.log(sc.draw(3,2));
