var method = CubeSum.prototype;


function CubeSum(input) {

    this._input = input;
    this._inputArray = [];
    this._output = "";
}

method.log  = function (text) {
  
  //console.log(text)
  this._output = this._output + (String(text) + '\n');
  //if (document) document.querySelector('#output').innerText += text + '\n'
}

method.crearMatriz = function (tamaño) {
  let matriz = []
  for (let i = 0; i < tamaño; i++) {
    matriz[ i ] = []
    for (let j = 0; j < tamaño; j++) {
      matriz[ i ][ j ] = []
      for (let k = 0; k < tamaño; k++) {
        matriz[ i ][ j ][ k ] = 0
      }
    }
  }
  return matriz
}

method.correrUpdate = function(valores, matriz) {
  const coord = {
    x: parseInt(valores[ 1 ]) - 1,
    y: parseInt(valores[ 2 ]) - 1,
    z: parseInt(valores[ 3 ]) - 1
  }
  const valor = parseInt(valores[ 4 ])
  matriz[ coord.x ][ coord.y ][ coord.z ] = valor
}


 method.correrQuery = function(valores, matriz) {
  const coordInicio = {
    x: parseInt(valores[ 1 ]) - 1,
    y: parseInt(valores[ 2 ]) - 1,
    z: parseInt(valores[ 3 ]) - 1
  }
  const coordFinal = {
    x: parseInt(valores[ 4 ]) - 1,
    y: parseInt(valores[ 5 ]) - 1,
    z: parseInt(valores[ 6 ]) - 1
  }
  let suma = 0
  for (let x = coordInicio.x; x <= coordFinal.x; x++) {
    for (let y = coordInicio.y; y <= coordFinal.y; y++) {
      for (let z = coordInicio.z; z <= coordFinal.z; z++) {
        suma += matriz[x][y][z]
      }
    }
  }
  this.log(suma)
}

method.correrOperacion = function(operacion, matriz) {
  let operacionArray = operacion.split(' ')
  let tipo = operacionArray[ 0 ]
  if (tipo === 'UPDATE') {
    this.correrUpdate(operacionArray, matriz)
  } else if (tipo === 'QUERY') {
    this.correrQuery(operacionArray, matriz)
  } else {
    //throw new Error('Tipo de operación inválido')
    console.log('Tipo de operación inválido')
  }
}

method.correr = function() {
  
   // Save array with split  
  if(this._input != '')
    this._inputArray = this._input.split('\n')

	try {
	    //if (document) document.querySelector('#output').innerText += ''
	    //let inputArray = input.split('\n')
	    if (this._inputArray.length < 3) console.log('Texto de entrada inválido') //throw new Error('Texto de entrada inválido') 
	    let lineaActual = 0
	    let casos = parseInt(this._inputArray[ lineaActual++ ])

	    for (let caso = 0; caso < casos; caso++) {
	      let informacionCaso = this._inputArray[ lineaActual++ ].split(' ').map((n) => parseInt(n))
	      let tamaño = informacionCaso[ 0 ]
	      let operaciones = informacionCaso[ 1 ]
	      let matriz = this.crearMatriz(tamaño)
	      for (let operacion = 0; operacion < operaciones; operacion++) {
	        let operacion = this._inputArray[ lineaActual++ ]
	        this.correrOperacion(operacion, matriz)
	      }
	    }
	  } catch (err) {
	    console.log(err);
	    //console.log(err)
	    //if (document) document.querySelector('#error').innerText = err
	  }

    return this._output;
};

module.exports = CubeSum;

