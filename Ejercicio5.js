5. UN CINE OFRECE DIFERENTES PRECIOS DE ENTRADA SEGÚN LA EDAD DE LOS ESPECTADORES. LOS MENORES DE 12 AÑOS PAGAN 5
DÓLARES, LOS MAYORES DE 65 AÑOS PAGAN 7 DÓLARES, Y LOS DEMÁS PAGAN 10 DÓLARES. ESCRIBE UN PROGRAMA QUE PREGUNTE LA
EDAD DEL ESPECTADOR Y CALCULE EL PRECIO DE ENTRADA.

function calcularPrecioEntrada() {
  let edad = prompt("Ingrese su edad:");
  edad = parseInt(edad);

  if (isNaN(edad) || edad < 0) {
    alert("Por favor, ingrese una edad válida.");
    return;
  }

  let precio = 0;
  if (edad < 12) {
    precio = 5;
  } else if (edad > 65) {
    precio = 7;
  } else {
    precio = 10;
  }

  alert("El precio de su entrada es de $" + precio + " dólares.");
}

calcularPrecioEntrada();

