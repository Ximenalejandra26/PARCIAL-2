const libros = [
    { titulo: "Algoritmos Avanzados", año: 2018, reservas: 120 },
    { titulo: "Introducción a JavaScript", año: 2020, reservas: 90 },
    { titulo: "Estructuras de Datos", año: 2015, reservas: 60 },
    { titulo: "Sistemas Operativos", año: 2019, reservas: 110 }
  ];
  
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
  
  console.time('Bubble Sort por Año');
  const librosOrdenados = bubbleSort(libros, 'año');
  console.timeEnd('Bubble Sort por Año');
  console.log(librosOrdenados);

  const libros1 = [
    { titulo: "Algoritmos Avanzados", año: 2018, reservas: 120 },
    { titulo: "Introducción a JavaScript", año: 2020, reservas: 90 },
    { titulo: "Estructuras de Datos", año: 2015, reservas: 60 },
    { titulo: "Sistemas Operativos", año: 2019, reservas: 110 }
  ];
  
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
  
  console.time('Insertion Sort por Reservas');
  const librosOrdenadosreservas = insertionSort(libros1, 'reservas');
  console.timeEnd('Insertion Sort por Reservas');
  console.log(librosOrdenadosreservas);
 
  const libros3 = [
    { titulo: "Algoritmos Avanzados", año: 2018, reservas: 120 },
    { titulo: "Introducción a JavaScript", año: 2020, reservas: 90 },
    { titulo: "Estructuras de Datos", año: 2015, reservas: 60 },
    { titulo: "Sistemas Operativos", año: 2019, reservas: 110 }
  ];
  
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
  
  console.time('Selection Sort por Título');
  const librosOrdenadosPorTitulo = selectionSort(libros3, 'titulo');
  console.timeEnd('Selection Sort por Título');
  console.log(librosOrdenadosPorTitulo);
    
  //El algoritmo mas facil y practico para realizar este codigo es bubbleSort