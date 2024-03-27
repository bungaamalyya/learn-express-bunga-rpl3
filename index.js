const express = require('express')
const app = express()
const port = 3000

// routes utama kitttaaa(ciaelah kita) dengan method GET :^
app.get('/', (req, res) => {
  res.send('Hellouuuuur DuuuNIInIIAaaaaAAAAaa!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})