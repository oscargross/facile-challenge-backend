"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv").config();
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var index_1 = __importDefault(require("./routes/index"));
var bodyParser = require('body-parser');
require("./database");
var app = express_1.default();
app.use(cors_1.default());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(index_1.default);
app.listen(process.env.PORT || 3333, function () {
    console.log('Server => port 3333');
});
