/*  Escriba la definición de una función en javascript que reciba un
    vector 3D cualquiera como parámetro (interpretarlo como mejor lo considere)
    y retorne si el mismo es o no paralelo a uno de los ejes principales
    (X, Y o Z).*/

function vector(v){

    if (v.x !==0 && v.y ==0 && v.z ==0)
    {return true;} // Es paralelo en X
   
    if (v.x ==0 && v.y !==0 && v.z ==0)
    {return true;} // Es paralelo en Y
   
    if (v.x ==0 && v.y ==0 && v.z !==0)
    {return true;} // Es paralelo en Z
    
return false;
}


/*  Escriba la definición de una función en javascript que reciba
    un arreglo de elementos de tipo entero y retorne el elemento de 
    menor valor. */
function disminuir_arreglo(arreglo)
{
let disminuir = arreglo[0];
for (int i = 1; i < arreglo.lenght; i++){
	if (arreglo[i] < disminuir) {
	  disminuir = arreglo;
	}
     }
   return disminuir;
}

