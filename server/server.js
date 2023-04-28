const express = require('express')
const sampleData = require('./sampleData')
const app = express()
const port = "3001";

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// MasterDetail Page Endpoint
app.get('/api/masterdetail', (req, res) => {
  res.json(sampleData.textAssets)
})

// Grid Page Endpoint
app.get('/api/grid', (req, res) => {
  res.json(sampleData.textAssets)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
