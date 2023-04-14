/*  Escriba la definición de una función en javascript que reciba un
    vector 3D cualquiera como parámetro (interpretarlo como mejor lo considere)
    y retorne si el mismo es o no paralelo a uno de los ejes principales
    (X, Y o Z).*/

function vector(v){   
	
    if (v.y === 0 && v.z === 0) // Es paralelo en X
    {return true;}
   
    else if (v.x === 0 && v.z === 0) // Es paralelo en Y
    {return true;} 
   
    else if (v.x === 0 && v.y === 0)  // Es paralelo en Z
    {return true;}
    
   return false; // No es paralelo
}

/*  Escriba la definición de una función en javascript que reciba
    un arreglo de elementos de tipo entero y retorne el elemento de 
    menor valor. */


function disminuir_numeros(cantidad)
{
let disminuir = cantidad[0]; // Arreglo inicial desde cero
for (let i = 1; i < cantidad.length; i++){ // for para que se repita la función en base a la cantidad de datos
	
	if (cantidad[i] < disminuir){ // Se recorre el arreglo hasta encontrar el dato de menor valor
		
	  disminuir = cantidad[i]; // El valor es obtenido 
	}
     }
   return disminuir;
}

