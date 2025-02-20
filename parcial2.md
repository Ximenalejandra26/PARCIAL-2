# Documentación del parcial

## Descripción general
En este parcial, debemos implementar tres algoritmos de ordenamiento: **Bubble Sort**, **Insertion Sort** y **Selection Sort**. Estos algoritmos se utilizan para ordenar un arreglo de objetos `libros` en función de diferentes claves (`año`, `reservas` y `titulo`). El código mide el tiempo de ejecución de cada algoritmo usando `console.time` y `console.timeEnd`.

## **Declaración del arreglo de libros**
Primero, se declara un arreglo de objetos `libros`, donde cada objeto tiene tres propiedades: `titulo`, `año` y `reservas`.

- **ejemplo:**
```js
const libros = [
    { titulo: "Algoritmos Avanzados", año: 2018, reservas: 120 },
    { titulo: "Introducción a JavaScript", año: 2020, reservas: 90 },
    { titulo: "Estructuras de Datos", año: 2015, reservas: 60 },
    { titulo: "Sistemas Operativos", año: 2019, reservas: 110 }
];
```
## 1. **Bubble Sort**

Con Este algoritmo lo que buscamos es, organizar el arreglo por `año`. Este Compara elementos adyacentes y los intercambia si están en el orden incorrecto. Se repite el proceso hasta que el arreglo está completamente ordenado.

- **Codigo**
```js
const bubbleSort = (array, año) => {
  let swapped;
  for (let i = array.length - 1; i > 0; i--) { 
    swapped = false; 
    for (let j = 0; j < i; j++) { 
      if (array[j][año] > array[j + 1][año]) { 
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true; 
      }
    }
    if (!swapped) break; 
  }
  return array;
};
```
**En el ciclo Externo:** Itera a través de los elementos del arreglo desde el final hasta el principio.
**En el ciclo Interno:** Compara elementos adyacentes y los intercambia si el valor de año es mayor en el primer elemento.
**swapped:** Es una variable que se usa para verificar si se realizaron intercambios. Si no se realizaron intercambios, el ciclo termina antes.
**- ejecucion**
```js
console.time('Bubble Sort por Año');
const librosOrdenados = bubbleSort(libros, 'año');
console.timeEnd('Bubble Sort por Año');
console.log(librosOrdenados);
```
**- Salida de espera:**
```js
[
  { titulo: "Estructuras de Datos", año: 2015, reservas: 60 },
  { titulo: "Algoritmos Avanzados", año: 2018, reservas: 120 },
  { titulo: "Sistemas Operativos", año: 2019, reservas: 110 },
  { titulo: "Introducción a JavaScript", año: 2020, reservas: 90 }
]
```

## 2. Insertion Sort
Con Este algoritmo lo que buscamos es, organizar el arreglo segun el numero de `reservas` de menor a mayor. Funciona insertando cada elemento en su posición correspondiente, comparando con los elementos anteriores.

- **codigo**
```js
const insertionSort = (array, reservas) => {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j][reservas] > current[reservas]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
};
```
**Ciclo Externo:** Itera sobre el arreglo empezando desde el segundo elemento.
**Ciclo Interno:** Compara el elemento actual con los elementos anteriores y lo inserta en la posición correcta.

**- ejecucion**
```js
console.time('Insertion Sort por Reservas');
const librosOrdenadosreservas = insertionSort(libros1, 'reservas');
console.timeEnd('Insertion Sort por Reservas');
console.log(librosOrdenadosreservas);
```
**- Salida esperada**
```js
console.time('Insertion Sort por Reservas');
const librosOrdenadosreservas = insertionSort(libros1, 'reservas');
console.timeEnd('Insertion Sort por Reservas');
console.log(librosOrdenadosreservas);
```

## 4. Selection Sort
Lo que buscmaos con este algoritmo es ordenar el arreglo de libros por el `titulo` de forma alfabética. Busca el elemento más pequeño en cada iteración y lo coloca en la posición correcta.

- **Código**
```js
function selectionSort(array, titulo) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j][titulo].localeCompare(array[minIndex][titulo]) < 0) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}
```
**Ciclo Externo:** Recorre el arreglo buscando el mínimo.
**Ciclo Interno:** Compara el título de cada elemento usando localeCompare() para determinar cuál es el más pequeño.
**Intercambio:** Coloca el elemento más pequeño en la posición correcta.
Este código muestra cómo se pueden usar tres algoritmos clásicos de ordenamiento para ordenar un arreglo de objetos. Cada algoritmo se ha implementado para ordenar los libros según una propiedad específica: año, reservas y titulo. También se mide el tiempo de ejecución de cada algoritmo para evaluar su rendimiento.

**- Ejecucion**
```Js
console.time('Insertion Sort por Reservas');
const librosOrdenadosreservas = insertionSort(libros1, 'reservas');
console.timeEnd('Insertion Sort por Reservas');
console.log(librosOrdenadosreservas);
```

**- Salida esperada**
```js
console.time('Insertion Sort por Reservas');
const librosOrdenadosreservas = insertionSort(libros1, 'reservas');
console.timeEnd('Insertion Sort por Reservas');
console.log(librosOrdenadosreservas);
```