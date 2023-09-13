let cabecera = document.head
console.log(cabecera)

let body= document.body
console.log(body)

let lpAntiguos = document.getElementById("antiguo")
console.log(lpAntiguos)

let nodos = lpAntiguos.childNodes
for(let i = 0; i< nodos.length; i++){
    console.log(nodos[i])
}

let arr_nodos = []
for(let i = 0; i<nodos.length; i++){
    if(nodos[i].nodeType == document.ELEMENT_NODE){
        arr_nodos.push(nodos[i].textContent)
    }
}
document.getElementById("rpta1").innerHTML = arr_nodos

let lpModernos = document.getElementById("moderno")
let arr_nodos2 = []
let nodos2 = lpModernos.childNodes
for (let i = 0; i<nodos2.length; i++){
    if (nodos2[i].nodeType == document.ELEMENT_NODE){
        arr_nodos2.push(nodos2[i].textContent)
    }
}
document.getElementById("rpta2").innerHTML = arr_nodos2


let arr_rpta = arr_nodos.concat(arr_nodos2)
document.getElementById("rpta2").innerHTML = arr_rpta

let cadena = arr_nodos.join('XXXXXXXXXXXXXXXXXXXX')
document.getElementById("rpta2").innerHTML = cadena

let posicion = arr_nodos2.indexOf("Kotlin")
document.getElementById("rpta2").innerHTML = posicion

arr_nodos2.splice(1,0,'X', 'Y','Z')
document.getElementById("rpta8").innerHTML = arr_nodos2


arr_nodos2.splice(5,0,'X', 'Y','Z')
document.getElementById("rpta8").innerHTML = arr_nodos2

arr_nodos2.splice(1,3)
document.getElementById("rpta9").innerHTML = arr_nodos2

arr_nodos2.splice(4,3,'Pepito', 'Luchito')
document.getElementById("rpta10").innerHTML = arr_nodos2

document.getElementById("rpta11").innerHTML = arr_nodos2.pop()

document.getElementById("rpta12").innerHTML = arr_nodos2.shift()

arr_nodos2.push("Pokemon")
document.getElementById("rpta13").innerHTML = arr_nodos2

arr_nodos2[arr_nodos2.length] = "Digimon"
document.getElementById("rpta13").innerHTML = arr_nodos2

arr_nodos2.unshift("nada")
document.getElementById("rpta14").innerHTML = arr_nodos2

arr_nodos2.sort()
document.getElementById("rpta15").innerHTML = arr_nodos2

arr_nodos2.reverse
document.getElementById("rpta16").innerHTML = arr_nodos2

let rama = []
rama.push("<ol>")
rama.push("<li>")
rama.push("las fijas")
rama.push("</li>")
rama.push("</ol>")

let cadena2 = rama.join('')
document.getElementById("rpta17").innerHTML = cadena2

