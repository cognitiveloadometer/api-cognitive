import jwt from "jsonwebtoken";

export const authUserMiddleware = (request, response, next) => {
    let token = request.headers.authorization

    if (!token) {
        return response.status(401).json({message: "Access denied"})
    }

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            response.status(401).json({message: "Access denied"})
        }

        request.userId = decoded.sub
        request.isAdm = decoded.isAdm

        next()
    })
}