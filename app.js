const express = require("express");

const app = express();

const PORT = 3000;

const handleListening = () => console.log(`Listening on http://localhost:${PORT}`);

app.use("/", (req, res) => res.send("Hello"));

app.listen(PORT, handleListening);