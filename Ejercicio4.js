4.UNA COMPAÑÍA DE SEGUROS OFRECE DIFERENTES TIPOS DE PÓLIZAS, CON DIFERENTES COBERTURAS Y PRECIOS. LA PÓLIZA BÁSICA
TIENE UNA COBERTURA DEL 50% Y UN PRECIO DE 50 DÓLARES. LA PÓLIZA INTERMEDIA TIENE UNA COBERTURA DEL 75% Y UN PRECIO DE
75 DÓLARES. LA PÓLIZA PREMIUM TIENE UNA COBERTURA DEL 100% Y UN PRECIO DE 100 DÓLARES. ESCRIBE UN PROGRAMA QUE
PREGUNTE AL USUARIO QUÉ TIPO DE PÓLIZA DESEA Y CALCULE EL PRECIO TOTAL A PAGAR.

function calcularPrecioPoliza(tipoPoliza) {
    let precio = 0;
    let cobertura = 0;

    switch (tipoPoliza) {
        case "básica":
            precio = 50; // Precio de la póliza básica
            cobertura = 0.50; // Cobertura del 50%
            break;
        case "intermedia":
            precio = 75; // Precio de la póliza intermedia
            cobertura = 0.75; // Cobertura del 75%
            break;
        case "premium":
            precio = 100; // Precio de la póliza premium
            cobertura = 1.00; // Cobertura del 100%
            break;
        default:
            return { precio: 0, cobertura: 0 }; // Tipo de póliza no válido
    }

    return { precio: precio, cobertura: cobertura };
}

// Preguntar al usuario qué tipo de póliza desea
const tipoPoliza = prompt("¿Qué tipo de póliza desea? (básica, intermedia, premium)").toLowerCase();
const resultado = calcularPrecioPoliza(tipoPoliza);

if (resultado.precio > 0) {
    alert(`Usted ha seleccionado la póliza ${tipoPoliza}.\n` +
          `Precio de la póliza: $${resultado.precio.toFixed(2)}\n` +
          `Cobertura: ${resultado.cobertura * 100}%`);
} else {
    alert("Por favor, seleccione un tipo de póliza válido.");
}



