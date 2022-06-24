const express = require("express")
const mainApiRouter = require("./routes/mainApiRouter")
const errorHandlerMiddleware = require("./middleware/error-handler")
const notFoundError = require("./errors/notFoundError")

const app = express()

//POST requests body parser
app.use(express.json())

app.use("/api/", mainApiRouter)

app.use(errorHandlerMiddleware)

app.listen(5000, console.log("Listening on port 5000..."))
