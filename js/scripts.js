//Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0\.  

const countdown =(number)=> {
    for(let i=number ; i > 0; i--){ 
console.log(i)
    }
}

countdown(11)

//Crea una función que reciba un array de 10 números e 
//imprima por consola la suma de todos los valores del 
//array.  

const additionNumbers = numbers=>{
    let total=0;
    for(let i=0 ; i<numbers.length; i++) {
        total= total +numbers[i];
        console.log(total);
    }
}

additionNumbers ([1,2,3,4,5,6,7,8,9,10])

//tercero

const multiply = number => {
for(let i=0; i<= 10; i++){

console.log(`${number}* ${i}= ${number*i}`)
}
}
multiply(4)

//cuarto

const multiplyTable =number => {
    for (let i=10; i >= 0; i--){
        console.log (`${number} * ${i} = ${number * i}`)

    }
}
multiplyTable(5)

//quinto

const yearOfBirth = (year, age) => {
    const ageUser = year - age;
    console.log(`Naciste en el año ${ageUser}`)
for ( let i=1; i <= age; i++) {


if ( i === 1){
    console.log (`En el año ${ageUser + i} cumpliste ${i} año`)
}else{
    console.log (`En el año ${ageUser + i} cumpliste ${i} años`)
}
}
}
yearOfBirth (2024, 32)

//sexto 

const peers = (num1, num2) => {
    for (let i = num1 ; i <= num2; i++){
        if( i % 2 ===0 ){
            console.log (i)
        }
    }
}
peers(2,12)

//Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno,
// la función debe decir qué valores se han repetido en los dos arrays. 

//Crea una función que reciba un número y te diga si es primo o no. Un número primo es 
//aquel que sólo puede dividirse por si mismo 

//Crea una función que reciba un array de 10 números, imprime por consola cada número, 
//su cuadrado y su cubo en este formato: "Número: 2 \- Cuadrado: 4 \- Cubo: 8".
// Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)  






