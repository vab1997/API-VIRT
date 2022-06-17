const express = require('express')
const db = require('./database')

const app = express()

app.set('port', process.env.PORT || 4000)

app.get('/categoria', async (req, res) => {
  const categorias = await db.query('SELECT * FROM categoria')
  console.log(categorias)
  return res.json(categorias)
})

app.get('/datos', async (req, res) => {
  const datosPersonales = await db.query('SELECT * FROM datosalumno')
  console.log(datosPersonales)
  return res.json(datosPersonales)
})

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})

// 22 y 80 443