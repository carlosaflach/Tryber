let alfa = 10;
let beta = 80;
let theta = 95;

if (alfa > 0 && beta > 0 && theta > 0 && alfa + beta + theta === 180){
    console.log(true);
}
else if (alfa < 0 || beta < 0 || theta < 0) {
    console.log ('O Angulo é invalido pois é negativo.');
}
else {
    console.log('Este não é um triângulo.');
}
