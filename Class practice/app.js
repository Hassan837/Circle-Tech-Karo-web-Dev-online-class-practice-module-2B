function convert() {
    var temp = document.getElementById('temp1').value;
    var cdeg = (temp * 9 / 5) + 32;
    var fdeg = (temp - 32) * 5 / 9;

    if (document.getElementById('formula').value === 'C') {
        console.log(cdeg);
        parseInt(document.querySelector('#res').value = cdeg + " " + "F");
     } 
    else if (document.getElementById('formula').value === 'F') {
        console.log(fdeg);
        parseInt(document.querySelector('#res').value = fdeg + " " + "C");
        
    } 
    else {
        alert("Select Unit First")
    }
}