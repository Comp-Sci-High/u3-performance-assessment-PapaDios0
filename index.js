// Good luck!
const express = require('express')
const { networkInterfaces } = require('os')
const app = express()

  
  const car = {
    logo: "Bugatti",
    history: [
      {
        founderName: "Ettore Bugatti",
        foundingYear: 1909,
        location: "Molsheim, France"
      }
    ],
    chiron: [
      {
        carName: "Bugatti Chiron",
        topSpeed: "280 mph",
        horsePower: 1600,
        streetLegal: true,
        price: 3400000
      }
    ]
  };
  
  app.use((request, repsonse, next) =>{
    console.log(request.method + "/" + request.url)
    next();
}) 

app.get("/", (request, response) =>{
    response.status(200).send("<h1>Welcome to Bugatti</h1>")
})

app.get("/api/history", (request, response) =>{
    response.status(200).json(car.history)
})

app.get("/api/car", (request, response) =>{
    response.status(200).json(car.chiron)
})

app.get("/docs", (request, response) =>{
    response.status(200).send("/api/history will bring you to the page that gives details about Bugatti itself, and /api/cars will give details about one of Bugattis most popular car, The Bugatti Chiron")
})






  app.use((req, res, next) => {
    res.status(404).send("404 NOT FOUND")
})

  app.listen(3000, () => {
    console.log("Server running")
})