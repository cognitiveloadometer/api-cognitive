import { database } from "../../database/index.js";

export const createTeamService = async (name, userId) => {
    try {
        const date = new Date()
        const response = await database.query(
            `INSERT INTO teams(name, createdat, userid) VALUES($1, $2, $3) RETURNING *`,
            [name, date, userId]
        )
        return response.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}