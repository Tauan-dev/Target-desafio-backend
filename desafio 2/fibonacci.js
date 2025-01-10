function gerarFibonacci(n) {
  let sequencia = [0, 1];
  while (sequencia[sequencia.length - 1] < n) {
    let proxValor =
      sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
    sequencia.push(proxValor);
  }
  return sequencia;
}

function Fibonacci(number) {
  const sequencia = gerarFibonacci(number);
  return sequencia.includes(number);
}

const checarNumero = 40;
const check = Fibonacci(checarNumero);

console.log(
  `O número ${checarNumero} pertence à sequência de Fibonacci? ${check}`
);
