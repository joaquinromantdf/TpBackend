const express = require ('express')

const app = express();

const port = 3000;

app.get("/", function(req, res, next){
    res.send("App express")
})

app.listen(port, () => {
    console.log(`ejecutando servidor en puerto ${port}`)
})