var data = 0;
var pippo = "pippo";

  
//funzione di incremento
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
    console.log(data);
}

//funzione di decrescita
function decrement() {
    data = data - 1;
    if (data < 0) {
        data = 0;
    }
    document.getElementById("counting").innerText = data;
    return data;
}
function getQuantity(data) {
     console.log(data);
    document.getElementById("VALORE").innerText = data;
    return data;
} 
console.log(data);
data = increment();
console.log(data)


var quantity = document.getElementById("VALORE");
console.log(quantity);
console.log("pippo");
quantity = addEventListener("Load", getQuantity(data));