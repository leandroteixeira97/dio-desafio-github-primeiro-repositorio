let num = document.querySelector('input#number')
let con = document.querySelector('select#console')
let res  = document.querySelector('div#res')
let values = []


function add() {
    
    if (isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.innerText = `O número ${num.value} foi adicionado!`
        con.appendChild(item)
        res.innerHTML = ''
    } else {
        alert(`O número digitado é inválido ou já consta na lista`)
    }
    num.value = ''
    num.focus()
}
    
function isNumber(n) {
if (Number(n)<1 || Number(n)>100) {
    return false
} else {
    return true
}
}

function inList(n, l) {
if (l.indexOf(Number(n)) != -1) {
    return true
} else {
    return false
}
}
    
function calculate() {
   if (values.length == 0) {
       alert(`Por favor, insira algum número antes de calcular!`)
   } else {
       let total = values.length
       let highest = values[0]
       let lowest = values[0]
       let addition = 0
       let average = 0

       for (let pos in values) {
           addition += values[pos]
           if (values[pos] > highest) {
               highest = values[pos]
           }
           if (values[pos] < lowest) {
           lowest = values[pos]
           }
       } average = addition / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${highest}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${lowest}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${addition}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${average}</p>`
   }
}