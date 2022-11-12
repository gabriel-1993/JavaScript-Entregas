const pizzas = [
  {
    id: 1,
    nombre: "Jamon y Rucula",
    ingredientes: ["Salsa", "Muzza", "Jamon crudo", "Rucula"],
    precio: "1200",
  },

  {
    id: 2,
    nombre: "Clabresa",
    ingredientes: ["Salsa", "Muzza", "Longaniza"],
    precio: 1100,
  },

  {
    id: 3,
    nombre: "Espinaca",
    ingredientes: ["Muzza", "Provolone", "Salsa blanca", "Espinaca"],
    precio: 1200,
  },

  {
    id: 4,
    nombre: "Napolitana",
    ingredientes: ["Muzza", "Tomates", "Albahaca", "Aceite de oliva"],
    precio: 1100,
  },

  {
    id: 5,
    nombre: "Cebollita",
    ingredientes: ["Salsa", "Muzza", "Cebolla"],
    precio: 1100,
  },

  {
    id: 6,
    nombre: "Especial",
    ingredientes: ["Salsa", "Muzza", "Jamon cocido", "Morron Rojo"],
    precio: 1100,
  },
];

// CONSIGNA A ; ID IMPARES
console.log(`Consigna A : `);
const idImpares = pizzas.filter((pizza) => {
  return pizza.id % 2 > 0;
});

idImpares.forEach((pizza) => {
  console.log(`La variedad ${pizza.nombre} tiene un ID impar`);
});

// CONSIGNA B , PRECIO < $600
console.log(`Consigna B : `);

const precioMenorA = pizzas.filter((pizza) => {
  if (pizza.precio < 600) {
    console.log(`Hay variedades con precio menor a 600 `);
  } else {
    console.log(`Ninguna variedad tiene precio menor a $600 por el momento`);
  }
});

// CONSIGNA C , NOMBRE DE CADA PIZZA Y SU RESPECTIVO PRECIO

console.log(`Consigna C : `);

const nombreYprecio = pizzas.forEach((pizza) => {
  console.log(`El precio de ${pizza.nombre} es igual a $${pizza.precio}`);
});

// CONSIGNA D Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual).

console.log(`Consigna D : `);

const ingredientesDePizza = pizzas.forEach((pizza) => {
  console.log(`Los ingredientes de ${pizza.nombre} son:${pizza.ingredientes}`);
});
