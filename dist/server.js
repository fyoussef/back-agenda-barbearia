"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var routes_1 = require("./routes");
var cors_1 = __importDefault(require("cors"));
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(cors_1["default"]());
app.use(routes_1.routes);
app.use(function (err, req, res, next) {
    if (err instanceof Error) {
        return res.status(400).json({
            message: err.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});
app.listen(80, function () { return console.log('Servidor rodando :80'); });
//# sourceMappingURL=server.js.map