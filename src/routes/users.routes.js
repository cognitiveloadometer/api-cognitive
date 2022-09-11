import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller.js";
import { listUserController } from "../controllers/users/listUser.controller.js";
import { loginUserController } from "../controllers/users/loginUser.controller.js";

const users = Router()

users.post("", createUserController)
users.get("", listUserController)
users.post("/login", loginUserController)

export default users