const express = require('express')
const db = require('better-sqlite3')('personas.sqlite')

const { request } = require('http')
const app = express()
const port = 3000
//crear confi de bases de datos

//servido web sabe donde esta la base de datos

app.use(express.json());

//callback, /get se ejecuta esta funcion
app.get('/persona', (req, res) => {
  //aqui hare el select
  personaId = req.query.edad;
  const row = db.prepare('SELECT * FROM persona WHERE edad = ?').get(personaId);
  res.json(row);
})



//callback, /get se ejecuta esta funcion
app.get('/persona', (req, res) => {
  //aqui hare el select
  personaId = req.query.edad;
  const row = db.prepare('SELECT * FROM persona WHERE edad = ?').get(personaId);
  res.json(row);
})

//primer eje
app.get('/Usuarios', (req, res) => {
  const row = db.prepare('SELECT * FROM Usuario').all();
  res.json(row);
});

//eje 2 
app.get('/Usuario', (req, res) => {
  const personaId = req.query.id;
  const row = db.prepare('SELECT * FROM Usuario WHERE id = ? ').get(personaId);
  res.json(row);
});


//eje 3 
app.get('/Products', (req, res) => {
  const row = db.prepare('SELECT * FROM Product').all();
  res.json(row);
});

//eje 4 
app.get('/Product', (req, res) => {
  const personaId = req.query.id;
  const row = db.prepare('SELECT * FROM Product WHERE id = ?').get(personaId);
  res.json(row);
});

//eje 5 
app.get('/Comandes', (req, res) => {
  const row = db.prepare('SELECT*FROM Comandes JOIN Usuario ON Comandes.Usuario_ID = Usuario.Id JOIN Product ON Comandes.Product_ID = Product.ID').all();
  res.json(row);
});
//eje 6 
app.get('/Comanda', (req, res) => {
  const personaId = req.query.id;
  const row = db.prepare('SELECT*FROM Comandes JOIN Usuario ON Comandes.Usuario_ID = Usuario.Id  Join PRODUCT  on Comandes.Product_ID = Product.ID WHERE Comandes.id = ?').get(personaId);
  res.json(row);
});

//metodos post para que escriban, el post no lo haremos lo hacmos para cuadno quremeos hacer acamobops
//sus /get, /post son para lo que estan hechas, es decir sus nombres hacen eso 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
