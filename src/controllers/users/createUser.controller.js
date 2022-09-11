import { createUserService } from "../../services/users/createUser.service.js";

export const createUserController = async (request, response) => {
    try {
        const user = request.body
        const newUser = await createUserService(user)
        return response.status(201).json(newUser)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}