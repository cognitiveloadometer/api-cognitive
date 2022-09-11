import { loginUserService } from "../../services/users/loginUser.service.js";

export const loginUserController = async (request, response) => {
    try {
        const user = request.body
        const userLogin = await loginUserService(user)
        return response.status(200).json(userLogin)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}