const express = require("express")

const mainApiRouter = require("./routes/mainApiRouter")

const app = express()

//POST requests body parser
app.use(express.json())
app.use("/api/", mainApiRouter)

app.listen(5000, console.log("Listening on port 5000..."))
