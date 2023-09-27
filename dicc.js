const arregloIndices = [0,1,2,3]
const data = ["saludo", "mundo", 5, "sasdafdad",23123,545,12];
const arreglo_dicc = {};

if(data.length >= arregloIndices.length){
    for ( let i = 0; i < arregloIndices.length; i++){
        arreglo_dicc[arregloIndices[i]] = data[i]
    }
    console.log(arreglo_dicc);
}

