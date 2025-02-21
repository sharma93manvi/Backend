import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>HTTP Request is successful.</h1>");
    console.log(req.rawHeaders);
});

app.get("/contact", (req, res) => {
    res.send("Contact us at abc@gmail.com");
    console.log(req.rawHeaders);
});

app.get("/about", (req, res) => {
    res.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus consectetur elit, vitae fringilla lorem aliquet non. Sed porttitor fermentum tincidunt. ");
    console.log(req.rawHeaders);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});