import express from "express";
import { startDatabase } from "./database/index.js";
import usersRoutes from "./routes/users.routes.js"
import teamsRoutes from "./routes/teams.routes.js"
import cognitiveRoutes from "./routes/cognitive.routes.js"
import cors from "cors"

const app = express()
const port = 3030

app.use(express.json())

app.use("/users", cors(), usersRoutes)
app.use("/teams", teamsRoutes)
app.use("/cognitiveloadmeter", cognitiveRoutes)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
    startDatabase()
})