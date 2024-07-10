function enemigoCercano(enemy1, dist1, enemy2, dist2) {
  if (dist1 < dist2) {
      console.log(enemy1);
  } else if (dist2 < dist1) {
      console.log(enemy2);
  } else {
      console.log(enemy1);
  }
}

function leerDatosEnemigos() {
  let enemy1 = prompt("Ingresa el nombre del enemigo 1");
  let dist1 = parseInt(prompt("Ingresa la distancia del enemigo 1"));

  let enemy2 = prompt("Ingresa el nombre del enemigo 2");
  let dist2 = parseInt(prompt("Ingresa la distancia del enemigo 2"));

  enemigoCercano(enemy1, dist1, enemy2, dist2);
  
  leerDatosEnemigos();
}ñ

leerDatosEnemigos();
