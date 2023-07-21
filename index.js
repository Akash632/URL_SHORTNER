const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url");

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);

app.use(express.json());

app.use("/url", urlRoute);


app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOne({shortId: shortId});
  res.redirect(entry.redirectURL);
});

app.listen(8000, () => console.log(`Server Started at PORT:8000`));
