import { listCognitiveByTeamIdService } from "../../services/cognitive/listCognitiveByTeamId.service.js";

export const listCognitiveByTeamIdController = async (request, response) => {
    try {
        const id = request.params.id
        const listCognitive = await listCognitiveByTeamIdService(id)
        return response.status(200).json(listCognitive)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}