//inicio


console.log('alcance de variables');
var variableglobal = 'variable de alcance global';
var variableconstante = 'constante durante ejecucion';
let varletlocal = 'ABC';
let varletnumero = 1112;

console.log('Variable global 1 = ' +variableglobal);

console.log('Constante = '+variableconstante)
{
    variableglobal = 'otro valor'
    console.log('Variable global 2' +variableglobal)
    let varletlocal = 'XYZ';
    console.log('letlocal: '+varletlocal)
}
console.log('letlocal: '+varletlocal)



console.log('+---------------IF---------------+')
let evaluacionif = true;
if (evaluacionif) {
    console.log('Adentro del IF');
    let letnumeroy = 11;
    let letnumerox = 76;

    console.log('Operacion * = '+(letnumerox * letnumeroy));
} else {
    console.log('estamos en el else del if');
}

console.log('+---------------Switch--------------+')
let letkey = 3;
switch (letkey) {
    case (1):
        console.log('caso para 1');
        break;
    case (2):
        console.log('caso para 2');
        break;
    case (3):
        console.log('caso para 3');
        break;
    case (4):
        console.log('caso para 4');
        break;
    default:
        console.log('valor no determinado en el sector')
}

