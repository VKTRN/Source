const app = require("express")()

app.get("/", (req, res) => {
  res.json({message: "Hi!"})
})

const port = process.env.PORT || 8080

app.listen(port, () => {console.log("listening on http://localhost:8080");})