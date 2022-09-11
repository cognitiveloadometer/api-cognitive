import { database } from "../../database/index.js";
import { createUserService } from "./createUser.service.js";
import jwt from "jsonwebtoken";

export const loginUserService = async (user) => {
    try {
        let userAlreadyExists = await database.query(
            `SELECT * FROM users WHERE email = $1;`,
            [user.email]
        )

        userAlreadyExists = userAlreadyExists.rows[0]

        if (!userAlreadyExists) {
            await createUserService(user)
        }

        const findUser = await database.query(
            `SELECT * FROM users WHERE email = $1`,
            [user.email]
        )

        const token = jwt.sign({
            email: user.email,
            isAdm: user.isAdm
        },
        process.env.SECRET_KEY,
        {
            expiresIn: "2h",
            subject: findUser.rows[0].id
        })

        const res = {
            user: findUser.rows[0],
            token: token
        }

        return res

    } catch (error) {
        throw new Error(error)
    }
}