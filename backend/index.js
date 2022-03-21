import express      from "express"
import dotenv       from "dotenv"
import cors         from "cors"
import stripeRoute  from "./routes/stripe.js"

const app = express()

dotenv.config()

// middleware
app.use(express.json());
app.use(cors())

// routes
app.use("/api/checkout", stripeRoute);

app.listen(5000, () => {console.log("http://localhost:5000")})