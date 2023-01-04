const arrayDemo = [50, 11, 22,2342, 234, 345346, 234234, 453];

const getBiggest = (array) => array.reduce((acumulador, elementoIterado) => acumulador > elementoIterado ? acumulador : elementoIterado);

const resultado = getBiggest(arrayDemo);




// Log to console
console.log(resultado)

// Update header text
document.querySelector('#header').innerHTML = resultado