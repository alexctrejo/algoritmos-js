const camino = [2, 4, 1, 7, 3];
const pasos = [2, 1, 4, 8, 6];

function aplicarPasos(camino, pasos) {

  const nuevoCamino = [...camino];

  for (let i = 0; i < camino.length; i++) {
    const paso = pasos[i];
    const indiceDestino = (i + paso) % camino.length;

    const temp = nuevoCamino[i];
    nuevoCamino[i] = nuevoCamino[indiceDestino];
    nuevoCamino[indiceDestino] = temp;

    console.log("Paso " + (i + 1) + ": " + nuevoCamino);
  }

  return nuevoCamino;
}

console.log(aplicarPasos(camino, pasos));
