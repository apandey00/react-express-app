const express = require('express')
const sampleData = require('./sampleData')
const app = express()
const port = "3001";

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// MasterDetail Page Endpoint
app.get('/masterdetail', (req, res) => {
  res.json(sampleData.textAssets)
})

// Grid Page Endpoint
app.get('/grid', (req, res) => {
  res.json(sampleData.textAssets)
})

app.post('/login', (req, res) => {
  const { userName, userPassword } = req.body;
  if (userName && userPassword && userName == 'nirav@gmail.com' && password == '12345')
    res.status(401).send({
      user_name: "",
      password: "",
      success: true,
      message: "Login Successfull"
    })
  else
    res.status(401).send({
      user_name: "",
      password: "",
      success: false,
      message: "Not a valid user."
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
