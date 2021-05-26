import { Router } from "express";
import { UserController } from "./controllers/UserController";

import cors from "cors";

const options: cors.CorsOptions = {
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

const router = Router();

router.use(cors(options));

const userController = new UserController();

router.post("/api/user", userController.create);

router.get("/api/users", userController.show);

router.get("/api/user/:id", userController.index);

router.put("/api/user/:id", userController.updateContacted);

export { router };
