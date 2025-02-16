7. UN PROFESOR CALIFICA A SUS ESTUDIANTES SEGÚN LA SIGUIENTE ESCALA: 0-59 PUNTOS ES UNA CALIFICACIÓN DE F, 60-69 PUNTOS ES
UNA CALIFICACIÓN DE D, 70-79 PUNTOS ES UNA CALIFICACIÓN DE C, 80-89 PUNTOS ES UNA CALIFICACIÓN DE B, Y 90-100 PUNTOS ES UNA
CALIFICACIÓN DE A. ESCRIBE UN PROGRAMA QUE PREGUNTE LA NOTA DEL ESTUDIANTE Y MUESTRE SU CALIFICACIÓN


function calcularCalificacion() {
  let nota = prompt("Ingrese la nota del estudiante:");
  nota = parseInt(nota); // Convertir la nota a un número entero

  // Validar que la nota sea un número válido dentro del rango 0-100
  if (isNaN(nota) || nota < 0 || nota > 100) {
    alert("Por favor, ingrese una nota válida entre 0 y 100.");
    return;
  }

  // Determinar la calificación según la escala
  let calificacion = "";
  if (nota >= 90 && nota <= 100) {
    calificacion = "A";
  } else if (nota >= 80 && nota <= 89) {
    calificacion = "B";
  } else if (nota >= 70 && nota <= 79) {
    calificacion = "C";
  } else if (nota >= 60 && nota <= 69) {
    calificacion = "D";
  } else {
    calificacion = "F";
  }

  // Mostrar la calificación al estudiante
  alert("La calificación del estudiante es: " + calificacion);
}

// Llamar a la función para calcular la calificación
calcularCalificacion();