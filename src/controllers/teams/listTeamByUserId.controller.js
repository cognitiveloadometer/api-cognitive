import { listTeamByUserIdService } from "../../services/teams/listTeamByUserId.service.js";

export const listTeamByUserIdController = async (request, response) => {
    try {
        const id = request.params.id
        const teamList = await listTeamByUserIdService(id)
        return response.status(200).json(teamList)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}