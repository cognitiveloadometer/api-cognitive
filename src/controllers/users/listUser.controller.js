import { listUserService } from "../../services/users/listUser.service.js";

export const listUserController = async (request, response) => {
    try {
        const users = await listUserService()
        return response.json(users)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}