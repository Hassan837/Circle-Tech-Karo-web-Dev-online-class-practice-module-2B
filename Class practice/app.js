// convert Celsius in to Fahrenheit
var t = document.querySelector('#inp1').value;


if(document.getElementById("temp").value == C) {
    let f = (1.8 * t) + 32;
    let answer = document.querySelector('#res').value = f;

    console.log(answer);
}


// function convert(){
//     var F = document.querySelector('#inp1').value;
//          F = (1.8 * C) + 32;

// document.querySelector('#inp1').innerHTML = 'The Value of Celsius is 60 degree after converting into fahrenheit is =  ' + F+'C';
// }



// // convert Fahrenheit into celsius
// function convert2(){
//     var C ; 
    
//     var F = 98;
    
//     C = (F - 32) / 1.8;
    
//     document.querySelector('#inp2').innerHTML = 'The Value of Fahrenheit is 98 degree after converting into Celsius is =  ' + C+'F';
//     }