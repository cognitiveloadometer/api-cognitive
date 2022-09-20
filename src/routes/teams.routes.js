import { Router } from "express";
import { createTeamController } from "../controllers/teams/createTeam.controller.js";
import { listTeamByUserIdController } from "../controllers/teams/listTeamByUserId.controller.js";
import { authUserMiddleware } from "../middlewares/authUser.middleware.js"

const teams = Router()

teams.post("", authUserMiddleware, createTeamController)
teams.get("/:id", listTeamByUserIdController)

export default teams