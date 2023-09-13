
function sumar() {

    let v1 = document.getElementById("op1").value
    let v2 = document.getElementById("op2").value

    let rpta = parseInt(v1) + parseInt(v2)

    document.getElementById("rpta").innerHTML = rpta

}