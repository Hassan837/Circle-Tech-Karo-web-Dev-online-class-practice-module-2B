function convert() {
    var temp = document.getElementById('temp').value;
    var cdeg = (temp * 9 / 5) + 32;
    var fdeg = (temp - 32) * 5 / 9;

    if (document.getElementById('formula').value == 'C') {
        console.log(cdeg);
    } else if (document.getElementById('formula').value == 'F') {
        console.log(fdeg);
    } else {
        alert("Select Unit First")
    }
}