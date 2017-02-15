var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 1337;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Configuración
app.configure(function() {
    // Localización de los ficheros estÃ¡ticos
    app.use(express.static(__dirname));
    // Muestra un log de todos los request en la consola
    app.use(express.logger('dev'));
    // Permite cambiar el HTML con el método POST
    app.use(express.bodyParser());
    // Simula DELETE y PUT
    app.use(express.methodOverride());
});

/*API REST MACHINES****************************************************/

/*GET*/
app.get('/api/cubeSummation', (req, res) => {
    res.json(JSON.stringify(Machines));
});

app.post('/api/cubeSummation',(req,res) => {

  let inputArray  = [];

  if(req.body.term != '')
    inputArray = req.body.term.split('\n');

  console.log("recibido dato : %s",inputArray.length);


});

var server = app.listen(port, function () {
   var host = server.address().address

   console.log("Example app listening at http://%s:%s", host, port)
})
