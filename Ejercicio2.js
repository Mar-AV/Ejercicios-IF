2. UNA EMPRESA OFRECE UN BONO DE PRODUCTIVIDAD A SUS TRABAJADORES, DEPENDIENDO DEL NÚMERO DE UNIDADES PRODUCIDAS
EN UN MES. SI SE PRODUCEN MÁS DE 100 UNIDADES, SE OTORGA UN BONO DEL 5% DEL SALARIO. SI SE PRODUCEN MÁS DE 200 UNIDADES,
SE OTORGA UN BONO DEL 10% DEL SALARIO. SI SE PRODUCEN MENOS DE 100 UNIDADES, NO HAY BONO. ESCRIBE UN PROGRAMA QUE
CALCULE EL BONO A OTORGAR Y MUESTRE EL SALARIO TOTAL A RECIBIR.

function calcularBono(salario, unidadesProducidas) {
    let bono = 0;

    if (unidadesProducidas > 200) {
        bono = 0.10 * salario; // 10% del salario
    } else if (unidadesProducidas > 100) {
        bono = 0.05 * salario; // 5% del salario
    }

    const salarioTotal = salario + bono;

    return {
        bono: bono,
        salarioTotal: salarioTotal
    };
}

// Solicitar al usuario que ingrese el salario y el número de unidades producidas
const salario = parseFloat(prompt("Ingrese su salario:"));
const unidadesProducidas = parseInt(prompt("Ingrese el número de unidades producidas en el mes:"), 10);

if (!isNaN(salario) && !isNaN(unidadesProducidas)) {
    const resultado = calcularBono(salario, unidadesProducidas);

    alert(`Salario base: $${salario.toFixed(2)}\n` +
          `Bono otorgado: $${resultado.bono.toFixed(2)}\n` +
          `Salario total a recibir: $${resultado.salarioTotal.toFixed(2)}`);
} else {
    alert("Por favor, ingrese valores válidos.");
}

