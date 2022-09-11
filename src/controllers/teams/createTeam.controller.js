import { createTeamService } from "../../services/teams/createTeam.service.js";
import { database } from "../../database/index.js";

export const createTeamController = async (request, response) => {
    try {
        const { name } = request.body
        const userId = request.userId
        const newTeam = await createTeamService(name, userId)
        return response.status(201).json({message: `Team ${name} created`, newTeam})
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}