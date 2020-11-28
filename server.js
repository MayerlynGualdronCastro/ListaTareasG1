'use strict';

const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

let tareas = {
  1: {
    "nombre": "estudiar para el quiz",
    "fecha_limite": "28/11/2020"
  },
  2: {
    "nombre": "practicar piano",
    "fecha_limite": "28/11/2020"
  }
}

app.get('/obtener-tareas', (req, res) => {
  res.send(tareas)
})

app.post('/agregar-tarea', (req, res) => {
  let tarea = req.body;
  let id_tarea = tarea["id"];
  tareas[id_tarea] = {"nombre": tarea["nombre"], "fecha_limite": tarea["fecha_limite"]}
  res.send("OK\n");
})

app.delete('/borrar-tarea', (req, res) => {
  let tarea = req.body;
  let id_tarea = tarea["id"];
  delete tareas[id_tarea];
  res.send("OK\n");
})

const server = app.listen(PORT, () => {
  const port = server.address().port;
  console.log("http://localhost:" + port);
});
