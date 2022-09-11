import { database } from "../../database/index.js"

export const createCognitiveService = async (load, teamId) => {
    try {
        const date = new Date()
        if (load < 0 || load > 5) {
            throw new Error('Loadmeter must be between 1 and 5')
        }
        if (!load) {
            throw new Error('Missing loadmeter value')
        }
        if (!teamId) {
            throw new Error('Missing team id value')
        }
        const response = await database.query(
            `INSERT INTO cognitive_load(load, createdat, teamid) VALUES($1, $2, $3) RETURNING *`,
            [load, date, teamId]
        )
        return response.rows[0] 
    } catch (error) {
        throw new Error(error)
    }
}