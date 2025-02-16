1.UNA TIENDA OFRECE DESCUENTOS SEGÚN EL MONTO DE LA COMPRA REALIZADA. SI EL MONTO ES MAYOR O IGUAL A 100 DÓLARES, SE E
APLICA UN DESCUENTO DEL 10%. SI EL MONTO ES MAYOR O IGUAL A 200 DÓLARES, SE APLICA UN DESCUENTO DEL 20%. SI EL MONTO ES
MENOR A 100 DÓLARES, NO HAY DESCUENTO. ESCRIBE UN PROGRAMA QUE CALCULE EL DESCUENTO A APLICAR Y MUESTRE EL MONTO
TOTAL A PAGAR.

function calcularMontoTotal(montoCompra) {
    let descuento = 0;

    if (montoCompra >= 200) {
        descuento = 0.20; // 20% de descuento
    } else if (montoCompra >= 100) {
        descuento = 0.10; // 10% de descuento
    }

    const montoDescuento = montoCompra * descuento;
    const montoTotalAPagar = montoCompra - montoDescuento;

    return {
        montoDescuento: montoDescuento,
        montoTotalAPagar: montoTotalAPagar
    };
}

// Solicitar al usuario que ingrese el monto de la compra
const montoCompra = parseFloat(prompt("Ingrese el monto de la compra:"));

if (!isNaN(montoCompra)) {
    const resultado = calcularMontoTotal(montoCompra);

    alert(`Monto de la compra: $${montoCompra.toFixed(2)}\n` +
          `Descuento aplicado: $${resultado.montoDescuento.toFixed(2)}\n` +
          `Monto total a pagar: $${resultado.montoTotalAPagar.toFixed(2)}`);
} else {
    alert("Por favor, ingrese un monto válido.");
}