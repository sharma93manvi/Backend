import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("HTTP Request is successful.")
    res.send("HTTP Request is successful.");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});