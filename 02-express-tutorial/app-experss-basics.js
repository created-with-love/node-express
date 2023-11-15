const express = require('express')

// 4:58:00
const app = express()
const PORT = 5000;

// home page
app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

// about page
app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

// default
app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`)
})


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use - for middlewares
// app.listen - listen app on port