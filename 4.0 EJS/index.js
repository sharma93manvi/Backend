import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    // console.log(day);
    let type = "a weekday";
    let adv = "it's time to work hard";

    if(day===0 || day === 6){
        type = "a weekend";
        adv = "it's time to have fun";
    }
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});