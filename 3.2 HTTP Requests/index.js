import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>HTTP Request is successful.</h1>");
    console.log(req.rawHeaders);
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact us</h1><p> Contact us at abc@gmail.com </p>");
    console.log(req.rawHeaders);
});

app.get("/about", (req, res) => {
    res.send("<h1>About me</h1><p>Hello! My name is Manvi Sharma. I live in Vancouver. </p>");
    console.log(req.rawHeaders);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});