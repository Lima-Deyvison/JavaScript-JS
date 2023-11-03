var nome = prompt("Qual seu nome?")
var idade = Number.parseInt(prompt("Qual sua idade?"))
var sal = Number(prompt("Qual seu salário?"))
//var sal = prompt("Qual seu salário?")

document.writeln(`<p>Olá ${nome}, tudo bem?</p>`)
document.writeln(`<p>${nome}, seu nome contém ${nome.length} letras e sua idade é ${idade} anos.</p>`)
document.writeln(`<p>Seu nome em maiúsculo é ${nome.toUpperCase()}.</p>`)
document.writeln(`<p>Seu nome em minusculo é ${nome.toLowerCase()}.</p>`)

document.writeln(`${nome}, seu salário é ${sal}.`)
document.writeln(`O seu salário formatado corretamente é ${sal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.`)

document.writeln(`<p>O tipo da variável idade é ${typeof idade}.</p>`)
document.writeln(`<p>O tipo da variável salário é ${typeof sal}.</p>`)
