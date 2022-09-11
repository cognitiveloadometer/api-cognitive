import { database } from "../../database/index.js";

export const createUserService = async (user) => {
    try {
        user.isAdm = false
    
        if (!user.name || !user.email) {
            throw new Error("Must fill all the fields")
        }
        
        const response = await database.query(
            `INSERT INTO users(name, email, isAdm) VALUES($1, $2, $3) RETURNING *`,
            [user.name, user.email, user.isAdm]
        )

        return response.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}