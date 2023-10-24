/* EJERCICIO 1 */

/* Pedir dos números y mostrar el resultado */

function ejercicio1() {

    var num1 = parseFloat(prompt('Escribe el primer número'));
    var num2 = parseFloat(prompt('Escribe el segundo número'));

    alert('La suma de los dos números introducidos es ' + (num1+num2));

}


/* EJERCICIO 2 */

/* Leer un número y mostrar su cuadrado. Repetir el proceso hasta que se introduzca un número negativo. */

function ejercicio2() {

    while ((num = parseInt(prompt('Introduce un número:'))) >= 0) { 

        var cuadrado = num * num;
        
        alert(`Cuadrado del número introducido: ${cuadrado}`); }
    
    if (num < 0) { alert('Has ingresado un número negativo.'); } 

}
  

/* EJERCICIO 3 */
  
/* Pedir números hasta que se teclee uno negativo y mostrar cuántos números se han introducido */

function ejercicio3() {

    var cont = 0;

    while ((num = parseInt(prompt('Introduce un número:'))) >= 0) { cont++; }
  
    if (num < 0) { alert(`Has ingresado un número negativo. ¡Proceso finalizado! Número total de entradas: ${cont}`); }

}


/* EJERCICIO 4 */

/* Pedir números hasta que se introduzca uno negativo y calcular la media */

function ejercicio4() {

    var nums = 0;
    var div = 0;
    var num;
    var media;
  
    while ((num = parseInt(prompt('Introduce un número:'))) >= 0) {

        nums = nums + num;
        div++;
        media = nums / div;

    }

    if (num < 0) { alert(`Has ingresado un número negativo. ¡Proceso finalizado! Media de los números introducidos: ${media}`); }

}

/* EJERCICIO 5 */

/* Escribir todos los números del 100 al 0 de 7 en 7 */

function ejercicio5() {

    var num = 100;

    while (num >= 0) {

        console.log(num);
        num = num - 7;

    }

}

/* EJERCICIO 6 */

/* Diseñar un programa que muestre el producto de los 10 primeros números impares */

function ejercicio6() {

    var product = 1;
    var actual_num = 1; 
    var total_nums = 0;

    while (total_nums < 10) { 

        product *= actual_num;
        total_nums++;
        actual_num += 2;  

    }

    console.log(product);
    
}

/* EJERCICIO 7 */

/* Pedir un número y calcular su factorial */

function ejercicio7() {

    var factorial = 1;

    var num_input = parseInt(prompt('Introduce un número: '));

    if(isNaN(num_input)) { alert("Debes ingresar un número válido"); }

    var actual_num = num_input; 

    while (actual_num >= 1) { 

        factorial *= actual_num;
        actual_num--; 

    }

    console.log(factorial);

}

/* EJERCICIO 8 */

/* Pedir 10 números. Mostrar la media de los números positivos, la media de los números negativos y la cantidad de ceros */

function ejercicio8() {

    var num_imputs = 0;
    var num_positivos = 0;
    var sum_positvos = 0;
    var media_positivos = 0;
    var media_negativos = 0;
    var num_negativos = 0;
    var sum_negativos = 0;
    var num_ceros = 0;
    
    while (num_imputs < 10) {

        var actual_num = parseInt(prompt('Introduce un número:'));

        if (actual_num >= 0) {

            num_positivos++;
            sum_positvos = sum_positvos + actual_num;
            media_positivos = sum_positvos / num_positivos;

        } 
        
        if (actual_num == 0) {

            num_ceros++;

        } else {

            num_negativos++;
            sum_negativos = sum_negativos + actual_num;
            media_negativos = sum_negativos / num_negativos;

        }

        num_imputs++;

    }

    console.log(`Media pares: ${media_positivos}`);
    console.log(`Media impares: ${media_negativos}`);
    console.log(`Número de ceros: ${num_ceros}`);

}

/* EJERCICIO 9 */

/* Pedir 10 sueldos. Mostrar su suma y cuantos hay mayores de 1000€ */

function ejercicio9() {

    var num_imputs = 0;
    var num_superiores = 0;
    var sum = 0;

    while (num_imputs < 10) {

        var actual_num = parseInt(prompt('Introduce un número:'));

        if (actual_num > 1000) { num_superiores++; }

        sum = sum + actual_num;
        num_imputs++;

    }

    console.log(`Suma total: ${sum}`);
    console.log(`Mayores que 1000: ${num_superiores}`);

}

/*  EJERCICIO 10 */

/* Dadas las edades y alturas de 5 alumnos, mostrar la edad y la estatura media, la cantidad de alumnos mayores de 18 años, y la cantidad de alumnos que miden más de 1.75... */ 

function ejercicio10() {

    var num_imputs = 0;
    var sum_edades = 0;
    var media_edades = 0;
    var sum_alturas = 0;
    var media_alturas = 0;
    var num_mayores_18 = 0;
    var num_alturas_mayores_175 = 0;

    while (num_imputs < 5) {

        var edad = parseInt(prompt('Introduce la edad de un alumno:'));

        var altura = parseInt(prompt('Introduce la altura de un alumno:'));

        if (edad >= 18) { num_mayores_18++; }

        if (altura >= 175) { num_alturas_mayores_175++; }

        sum_edades = sum_edades + edad;
        sum_alturas = sum_alturas + altura;

        media_edades = sum_edades / num_imputs;
        media_alturas = sum_alturas / num_imputs;

        num_imputs++;

    }

    console.log(`Mayores a 18: ${num_mayores_18}`);
    console.log(`Más altos que 175 cm: ${num_alturas_mayores_175}`);
    console.log(`Media de edades: ${media_edades}`);
    console.log(`Media de alturas: ${media_alturas}`);

}

/*  EJERCICIO 11 */

/* Pedir un número y mostrar si es primo o no. */

function ejercicio11() {

    var num = parseInt(prompt('Introduce un número:'));

    if(isNaN(num)) { alert("Debes ingresar un número válido"); }

    if (esPrimo(num)) {

        console.log(`${num} es un número primo`);

    } else {

        console.log(`${num} no es un número primo`);

    }

}

function esPrimo(num) {

    if (num <= 1) { return false; }

    for (var i = 2; i < num; i++) { if (num % i === 0) { return false; } }
    
    return true; 
    
}

/*  EJERCICIO 12 */

/* Pedir un número y mostrar todos los números pares desde 1 hasta ese número. */

function ejercicio12() {

    var num = parseInt(prompt('Introduce un número:'));

    if(isNaN(num)) { alert("Debes ingresar un número válido"); }

    var contador = 1;

    while (contador <= num) {

        if ((contador % 2) == 0) {

            console.log(`${contador} es par y menor que ${num}`)

        }

        contador++;

    }

}

/* EJERCICIO 13 */

/* Pedir un número y mostrar su tabla de multiplicar del 1 al 10. */

function ejercicio13() {

    var multplicador = 0;

    var num = parseInt(prompt('Introduce un número:'));

    if(isNaN(num)) { alert("Debes ingresar un número válido"); }

    var resultado;

    while (multplicador <= 10) {

        resultado = num * multplicador;
        console.log(`${num} * ${multplicador} = ${resultado}`)

        multplicador++;

    }

}

/* EJERCICIO 14 */

/* Calcular la suma de los dígitos de un número entero */ 

function ejercicio14() {

    var num_int = parseInt(prompt('Introduce un número entero con más de un dígito:'));

    if(isNaN(num_int)) { alert("Debes ingresar un número válido"); }

    // Convierte número introducido a cadena de texto, separa cada digito de la cadena y los mete en un array

    var digits = num_int.toString().split('');

    var sum = 0;

    // Recorre el array y suma cada dígito a la suma total 

    for (var i = 0; i < digits.length; i++) { sum += parseInt(digits[i]); }

    console.log("La suma de los dígitos de " + num_int + " es " + sum);

}

/* EJERCICIO 15 */

/* Calcular la letra del DNI. Los 8 números deben introducirse de uno en uno */

function ejercicio15() {

    // Crea los arrays.

    var dni_number = [];
    var dni_letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
  
    // Recoge 8 números introducidos por el usuario y los añade al array.
    
    for (var i = 1; i <= 8; i++) {

      var num_input = parseInt(prompt('Introduce el dígito ' + i + ' del DNI:'));
  
      if (isNaN(num_input)) { alert('Por favor, ingresa un dígito válido (0-9).'); }
  
      dni_number.push(num_input);

    }

    // Combina los números del array (sin espacios) para calcular el resto dividiéndolo entre 23
    
    var num_int = parseInt(dni_number.join(''));

    var rest = num_int % 23;

    // Recoge la letra en la posición del resto y la une al array del dni para mostrar el DNI completo

    var letter = dni_letters[rest];
  
    console.log('El DNI completo es ' + dni_number.join('') + letter);

}

/* EJERCICIO 16 */

/*  Solicitar al usuario el total de la cuenta y el porcentaje de propina deseado, despues mostrar por pantalla la propina en euros y el total (propina incluida) */

function ejercicio16() {

    var account = parseInt(prompt('Introduce el total de la cuenta:'));
    var percentage = parseInt(prompt('Introduce el porcentaje de propina a aplicar:'));

    var tip = ((percentage / 100) * account);
    var total_account = account + tip;

    document.write('Aplicando un porcentaje del ' + percentage + ', la cantidad de propina a sumar es ' + tip + '. Por lo tanto, la cantidad total a pagar (propina incluida) es ' + total_account + '.');

}

/* EJERCICIO 17 */

/* Hacer un juego de adivinanza. Generar un numero entre 0 y 100 y pedir al usuario que intente adivinarlo. Si lo acierta mostrar un mensaje de felicidades y sino indicar si el numero es mayor o menor comparándolo con el introducido por el usuario */

function ejercicio17() {

    var num_random = Math.floor(Math.random() * 101); 
    
    console.log('Intenta adivinar el número oculto entre 0 y 100');
    
    while (true) {

        var num_input = parseInt(prompt('Introduce un número: '));
        
        if (num_input == num_random) {

            console.log('¡Felicidades! Has ganado');
            break;

        } else if (num_input < num_random) {

            console.log('El número que buscas es mayor');

        } else {

            console.log('El número que buscas es menor');

        }

    }

}

/* EJERCICIO 18 */

/*

Eliminar una palabra:

    ◦ Pedir al usuario que ingrese una frase y una palabra a eliminar
    ◦ Eliminar todas las apariciones de la palabra en la frase utilizando el método split, join y indexOf
    ◦ Mostrar la frase resultante sin la palabra eliminada

*/

function ejercicio18() {

    var phrase_str = prompt('Introduce una frase: ');
    var word_str = prompt('Introduce la palabra que deseas eliminar: ');

    console.log('Has introducido: ' + phrase_str);
    console.log('Deseas borrar la palabra: ' + word_str);

    // Divide la frase en un arrary de palabras

    var phrase_arr = phrase_str.split(' ');

    // Devuelve el index de las palabras a borrar si hay  palabras que coincidan y -1 si no las hay

    var index_to_delete = phrase_arr.indexOf(word_str);

    // El bucle se ejecuta mientras alguna palabra coincida con la introducida y las elimina

    while (index_to_delete !== -1) {

        phrase_arr.splice(index_to_delete, 1);
        index_to_delete = phrase_arr.indexOf(word_str);

    }

    // Une las palabras que no se han borrado en un nuevo array / frase

    var new_phrase = phrase_arr.join(' ');

    console.log('Frase resultante: ' + new_phrase);

}

/* EJERCICIO 19 */

/* Pedir al usuario que ingrese una lista de elementos separados por comas. Devolver una lista sin elementos duplicados */

function ejercicio19() {

    var phrase_str = prompt('Introduce varias palabras separadas por comas: ');

    var phrase_arr = phrase_str.split(',');

    // Array que contendrá las palabras que no se repitan

    var unique_words = [];

    // Recorre el array de palabras comprobando si la palabra no está en el array de palabras únicas

    for (var i = 0; i < phrase_arr.length; i++) {

        var word = phrase_arr[i];

        if (unique_words.indexOf(word) === -1) { unique_words.push(word); }

    }

    console.log('Palabras sin elementos duplicados: ' + unique_words.join(', '));

}

/*

function ejercicio19() {

    var phrase_str = prompt('Introduce varias palabras separadas por comas: ');

    var phrase_arr = phrase_str.split(',');

    var repeated_elements = phrase_arr.filter ( function (value, index) { return phrase_arr.indexOf(value) === index; } )

    document.write(repeated_elements);

}

*/

/* EJERCICIO 20 */

/* Extraer los primeros 3 números del array 'numeros' */

function ejercicio20() {

    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var first_nums = [];

    for (var i = 0; i < 3; i++) { first_nums.push(nums[i]); }

    console.log('Los primeros 3 números son: ' + first_nums.join(', '));

}

/* EJERCICIO 21 */

/* Extraer las palabras en las posiciones 2 y 3 del array 'palabras' */

function ejercicio21() {

    var words = ['Hola', 'Mundo', 'JavaScript', 'Introducción', 'Programación'];

    console.log(words[2] + ' e ' + words[3] + ' están en las posiciones 2 y 3 del array');

}

/* EJERCICIO 22 */

/* Extraer una parte de la frase desde el índice 5 hasta el 15 */

function ejercicio22() {

    var phrase = 'Este es un ejemplo de una frase larga.';
    
    var final_phrase = phrase.substring(5, 15);
    
    console.log('Parte de la frase: ' + final_phrase);

}

/* EJERCICIO 23 */

/* Extraer los dos últimos elementos del array 'estudiantes' */

function ejercicio23() {

    var students = ['Ana', 'Juan', 'María', 'Pedro', 'Luis'];  

    // Utiliza slice() con un índice negativo para obtener los últimos dos elementos

    var last_students = students.slice(-2);

    console.log('Los dos últimos estudiantes son: ' + last_students.join(', '));
}

/* EJERCICIO 24 */

/* Extraer una porción del array 'numeros' desde el índice 3 hasta el final */

function ejercicio24() {
    
    var all_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Utiliza slice() para obtener una porción del array desde el índice 3 hasta el final

    var final_nums = all_nums.slice(3);

    console.log('Porción de números desde el índice 3 hasta el final: ' + final_nums.join(', '));

}

/* EJERCICIO 25 */

function ejercicio25() {



}