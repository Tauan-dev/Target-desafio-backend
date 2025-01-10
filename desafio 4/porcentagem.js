
const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};


const faturamentoTotal = Object.values(faturamento).reduce(
  (total, valor) => total + valor,
  0
);


const percentuais = {};
for (const estado in faturamento) {
  percentuais[estado] =
    ((faturamento[estado] / faturamentoTotal) * 100).toFixed(2) + "%";
}

console.log("Percentual de Representação de Cada Estado:");
for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado]}`);
}
