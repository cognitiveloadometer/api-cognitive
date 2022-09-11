import { database } from "../../database/index.js"

export const listTeamByUserIdService = async (userId) => {
    try {
        const response = await database.query(
            `SELECT teams.* FROM teams JOIN users ON users.id = teams.userid WHERE teams.userid = $1;`,
            [userId]
        )
        return response.rows
    } catch (error) {
        throw new Error(error)
    }
}