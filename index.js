const app = require("express")();

const data = {
  name: "Filipovici",
  surname: "Bogdan",
  message: "Welcome to my Docker container",
  date: new Date(),
};

app.get("/", (req, res) => res.json(data));

const port = 8080;

app.listen(port, () => console.log("Docker is running on port", port));
