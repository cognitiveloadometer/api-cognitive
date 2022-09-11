import { Router } from "express";
import { createCognitiveController } from "../controllers/cognitive/createCognitive.controller.js";
import { listCognitiveByTeamIdController } from "../controllers/cognitive/listCognitiveByTeamId.controller.js";

const cognitive = Router()

cognitive.post("", createCognitiveController)
cognitive.get("/:id", listCognitiveByTeamIdController)

export default cognitive