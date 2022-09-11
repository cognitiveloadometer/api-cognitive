import { createCognitiveService } from "../../services/cognitive/createCognitive.service.js";

export const createCognitiveController = async (request, response) => {
    try {
        const { load, teamId } = request.body
        const newCognitive = await createCognitiveService(load, teamId)
        return response.status(201).json(newCognitive)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}