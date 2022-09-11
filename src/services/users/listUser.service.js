import { database } from "../../database/index.js";

export const listUserService = async () => {
    try {
        const response = await database.query(
            `SELECT * FROM users`,
            []
        )
        return response.rows
    } catch (error) {
        throw new Error(error)
    }
}