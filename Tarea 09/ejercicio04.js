function enemigoPrioritario(enemy1, dist1, priority1, enemy2, dist2, priority2) {
  if (priority1 > priority2) {
      console.log(enemy1);
  } else if (priority2 > priority1) {
      console.log(enemy2);
  } else {
      if (dist1 < dist2) {
          console.log(enemy1);
      } else {
          console.log(enemy2);
      }
  }
}

function leerDatosEnemigos() {
  let enemy1 = prompt("Ingresa el nombre del enemigo 1");
  let dist1 = parseInt(prompt("Ingresa la distancia del enemigo 1"));
  let priority1 = parseInt(prompt("Ingresa la prioridad del enemigo 1"));

  let enemy2 = prompt("Ingresa el nombre del enemigo 2");
  let dist2 = parseInt(prompt("Ingresa la distancia del enemigo 2"));
  let priority2 = parseInt(prompt("Ingresa la prioridad del enemigo 2"));

  enemigoPrioritario(enemy1, dist1, priority1, enemy2, dist2, priority2);
  leerDatosEnemigos();
};

leerDatosEnemigos();
