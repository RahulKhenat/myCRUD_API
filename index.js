const express = require("express");
const apiRouter = require('./routes/routes')

const app = express();
app.use ('/api',apiRouter)

app.use(express.json());

app.listen(process.env.PORT || "3000", () => {
  console.log(`server is running at ${process.env.PORT || "3000"}`);
});
