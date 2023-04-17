let estudante1 = {
  nome: 'João',
  nota1: 2,
  nota2: 5
}
let estudante2 = {
  nome: 'Maria',
  nota1: 8,
  nota2: 7
}
let estudante3 = {
  nome: 'pedro',
  nota1: 10,
  nota2: 10
}
let estudante4 = {
  nome: 'Diogo',
  nota1: 4,
  nota2: 1
}

let listaDeEstudantes = [estudante1, estudante2, estudante3, estudante4]

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2
}

for (let estudante of listaDeEstudantes) {
  let media = calcularMedia(estudante.nota1, estudante.nota2)
  if (media >= 7) {
    alert(`Parabéns ${estudante.nome}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(` Não foi dessa vez, ${estudante.nome}! Tente novamente!`)
  }
}
