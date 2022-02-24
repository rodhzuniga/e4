// Reto #6 - Edad permitida
// Pide al usuario que ingrese su edad y mostrarás un mensaje 
// correspondiente si esta coincide con las siguientes 
// condiciones:
// Más de 30 años: Nunca es tarde para aprender ¿Qué curso tomaremos?
// Entre 29 y 18 años: Es un momento excelente para impulsartu carrera.
// Menos de 18 años: ¿Sabes hacia dónde dirigir tu futuro? 
// Seguro puedo ayudarte.

let edad=prompt ("Edad: ");
if(edad>30){
    document.write ('Nunca es tarde para aprender ¿Qué curso tomaremos?'); //el alert es molesto, y la consola no me convence
} else if (edad>=18 && edad<=29){
    document.write('Es un momento excelente para impulsartu carrera.');
} else {
    document.write('¿Sabes hacia dónde dirigir tu futuro? Seguro puedo ayudarte.');
}