var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomid = faker.internet.mac();
  var randomName = faker.name.findName();
  var randomwords =faker.random.words();
  var randomDate = faker.date.past();
  var randomImage = faker.image.avatar();
  return {
    ID: randomid,
    nombre: randomName,
    Contenido: randomwords,
    fecha: randomDate,
    imagen: randomImage,
  }

}

var generarinfo = function(){
  var randomid = faker.internet.mac();
  var randomName = faker.name.findName();
  var randomwords =faker.random.words();
  var randomDate = faker.date.past();
  var randomImage = faker.image.avatar();
  return {
    ID: randomid,
    nombre: randomName,
    Contenido: randomwords,
    fecha: randomDate,
    imagen: randomImage,

  }

}


app.get('/', function (req, res) {
  res.send('MY FIRST SERVER!!!!!!!!!!');
})

app.get('/posts', function (req, res) {
  var cantidad = _.random(4,4)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/FIN', function (req, res) {
  res.send('FIN DEL RETO 1');
})

app.get('/reto1', function (req, res) {
  var cantidad = _.random(5,10)
  var informacion = _.times(cantidad, generarUsuario)
  res.json(informacion);
})




app.listen(3000);