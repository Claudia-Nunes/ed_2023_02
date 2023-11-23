/* Resumo:
O Bubble Sort é mais simples, fácil de implementar, 
mas menos eficiente para grandes conjuntos de dados.
O Merge Sort é mais complexo, usa uma estratégia de 
dividir para conquistar e é mais eficiente para grandes conjuntos de dados.
Ambos são algoritmos estáveis, o que significa que a ordem relativa dos elementos iguais é mantida.
Em geral, o Merge Sort é preferido quando a eficiência é uma consideração crucial, enquanto o 
Bubble Sort pode ser utilizado em situações mais simples ou para conjuntos de dados pequenos.*/


import * as fs from 'fs';

// Função Merge Sort
function mergeSort(arr: string[]): string[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: string[], right: string[]): string[] {
  let result: string[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Função principal
function main(): void {
  try {
    const palavras = fs.readFileSync('entrada.txt', 'utf8').split('\n');
    const palavrasOrdenadas = mergeSort(palavras);
    fs.writeFileSync('saida_ord.txt', palavrasOrdenadas.join('\n'));
    console.log('Ordenação concluída com sucesso usando Merge Sort!');
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

if (require.main === module) {
  main();
}
