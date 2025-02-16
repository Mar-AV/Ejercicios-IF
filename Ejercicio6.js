6. UNA TIENDA DE ROPA TIENE DIFERENTES PROMOCIONES SEGÚN LA CANTIDAD DE PRENDAS COMPRADAS. SI SE COMPRAN MÁS DE 3
PRENDAS, SE APLICA UN DESCUENTO DEL 10% EN EL TOTAL DE LA COMPRA. SI SE COMPRAN MÁS DE 5 PRENDAS, SE APLICA UN
DESCUENTO DEL 20% EN EL TOTAL DE LA COMPRA. SI SE COMPRAN MENOS DE 3 PRENDAS, NO HAY DESCUENTO. ESCRIBE UN PROGRAMA
QUE CALCULE EL DESCUENTO A APLICAR Y MUESTRE EL MONTO TOTAL A PAGAR.

function calcularDescuento() {
  // Pedir la cantidad de prendas compradas
  let cantidadPrendas = prompt("Ingrese la cantidad de prendas compradas:");
  cantidadPrendas = parseInt(cantidadPrendas); // Convertir la cantidad a un número entero

  // Validar que la cantidad sea un número válido
  if (isNaN(cantidadPrendas) || cantidadPrendas < 0) {
    alert("Por favor, ingrese una cantidad válida.");
    return;
  }

  // Calcular el descuento según la cantidad de prendas
  let descuento = 0;
  if (cantidadPrendas > 5) {
    descuento = 0.20; // 20% de descuento
  } else if (cantidadPrendas > 3) {
    descuento = 0.10; // 10% de descuento
  }

  // Calcular el precio total sin descuento (asumiendo que cada prenda cuesta $10)
  let precioTotalSinDescuento = cantidadPrendas * 10;

  // Calcular el monto total a pagar con descuento
  let montoTotalConDescuento = precioTotalSinDescuento * (1 - descuento);

  // Mostrar el descuento y el monto total a pagar
  alert("Descuento aplicado: " + (descuento * 100) + "%");
  alert("Monto total a pagar: $" + montoTotalConDescuento);
}

// Llamar a la función para calcular el descuento
calcularDescuento();