const express = require("express");
const app = express();
const PORT = 3500;

app.use("/", require("./routes"));

app.listen(PORT, () => {
    console.log(`Test server running on port ${PORT}`);
})