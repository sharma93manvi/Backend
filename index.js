import express from "express";
const app = express();
const port = 3000;

//Mention Port & callback(console.log)
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});