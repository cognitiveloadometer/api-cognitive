import { database } from "../../database/index.js"

export const listCognitiveByTeamIdService = async (teamId) => {
    try {
        const res = await database.query(
            `SELECT cognitive_load.* FROM cognitive_load JOIN teams ON teams.id = cognitive_load.teamid WHERE cognitive_load.teamid = $1`,
            [teamId]
        )
        return res.rows
    } catch (error) {
        throw new Error(error)
    }
}