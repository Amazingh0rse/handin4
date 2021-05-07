"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var gameData_1 = require("./gameData");
//const {gameArea, players} = require("./gameData")
exports.resolvers = {
    Query: {
        gameArea: function () {
            console.log(JSON.stringify(gameData_1.gameArea));
            return gameData_1.gameArea;
        }
    },
};
//# sourceMappingURL=resolvers.js.map