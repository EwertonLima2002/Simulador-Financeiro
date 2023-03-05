// Definindo uma lista de idades de alunos
let idadesAlunos = [20, 18, 19, 18, 21, 18];

// Inicializando uma variável contador
let contador = 0;

// Loop for para contar quantos alunos têm 18 anos
for (let i = 0; i < idadesAlunos.length; i++) {
  if (idadesAlunos[i] >= 18) {
    contador++;
  }
}

// Imprimindo o resultado
console.log("O número de alunos com 18 anos é:", contador);