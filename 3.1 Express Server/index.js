import express from "express";
const app = express();
// const port = 3000;

//to get response from the server
app.get("/", (req,res) => {
    res.send("Hello, World!");
});

//Mention Port & callback(console.log)
app.listen(3000, () => {
    console.log("Server running on port 3000");
    // console.log(`Server running on port ${port}.`);
});