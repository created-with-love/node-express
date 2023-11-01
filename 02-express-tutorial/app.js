const express = require('express')

// 4:58:00
const app = express()
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Home page')
})

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