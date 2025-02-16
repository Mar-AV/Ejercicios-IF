3. UN RESTAURANTE OFRECE DESCUENTOS A LOS CLIENTES SEGÚN LA EDAD. LOS MENORES DE 12 AÑOS TIENEN UN DESCUENTO DEL 50% EN
SU CONSUMO. LOS MAYORES DE 65 AÑOS TIENEN UN DESCUENTO DEL 25% EN SU CONSUMO. LOS CLIENTES ENTRE 12 Y 65 AÑOS NO
TIENEN DESCUENTO. ESCRIBE UN PROGRAMA QUE CALCULE EL DESCUENTO A APLICAR Y MUESTRE EL MONTO TOTAL A PAGAR.

function calcularDescuento(montoConsumo, edad) {
    let descuento = 0;

    if (edad < 12) {
        descuento = 0.50; // 50% de descuento
    } else if (edad > 65) {
        descuento = 0.25; // 25% de descuento
    }

    const montoDescuento = montoConsumo * descuento;
    const montoTotalAPagar = montoConsumo - montoDescuento;

    return {
        montoDescuento: montoDescuento,
        montoTotalAPagar: montoTotalAPagar
    };
}

// Solicitar al usuario que ingrese su consumo y su edad
const montoConsumo = parseFloat(prompt("Ingrese el monto del consumo:"));
const edad = parseInt(prompt("Ingrese su edad:"), 10);

if (!isNaN(montoConsumo) && !isNaN(edad)) {
    const resultado = calcularDescuento(montoConsumo, edad);

    alert(`Monto del consumo: $${montoConsumo.toFixed(2)}\n` +
          `Descuento aplicado: $${resultado.montoDescuento.toFixed(2)}\n` +
          `Monto total a pagar: $${resultado.montoTotalAPagar.toFixed(2)}`);
} else {
    alert("Por favor, ingrese valores válidos.");
}

