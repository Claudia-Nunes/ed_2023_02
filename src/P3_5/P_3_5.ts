import * as fs from 'fs';

function bubbleSort(arr: string[]): string[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function main(): void {
  const palavras = fs.readFileSync('entrada.txt', 'utf8').split('\n');
  const palavrasOrdenadas = bubbleSort(palavras);
  fs.writeFileSync('saida.txt', palavrasOrdenadas.join('\n'));
  console.log('Ordenação concluída com sucesso usando Merge Sort!');
}

if (require.main === module) {
  main();
}
