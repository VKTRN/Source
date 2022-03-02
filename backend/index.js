import express      from "express"
import mongoose     from "mongoose"
import dotenv       from "dotenv"
import cors         from "cors"

import itemRoute    from "./routes/items.js"

const app = express()

dotenv.config()

const options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(process.env.MONGO_URL, options, () => {console.log("Connected to mongoDB.")})

// middleware
app.use(express.json());
app.use(cors())

// routes
app.use("/api/items", itemRoute);

app.listen(5000, () => {console.log("http://localhost:5000")})