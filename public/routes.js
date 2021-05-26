"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var UserController_1 = require("./controllers/UserController");
var cors_1 = __importDefault(require("cors"));
var options = {
    allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
        "Access-Control-Allow-Origin",
    ],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "*",
    preflightContinue: false,
};
var router = express_1.Router();
exports.router = router;
router.use(cors_1.default(options));
var userController = new UserController_1.UserController();
router.post("/user", userController.create);
router.get("/users", userController.show);
router.get("/user/:id", userController.index);
router.put("/user/:id", userController.updateContacted);
