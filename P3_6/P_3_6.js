"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Função Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
// Função principal
function main() {
    try {
        var palavras = fs.readFileSync('entrada.txt', 'utf8').split('\n');
        var palavrasOrdenadas = mergeSort(palavras);
        fs.writeFileSync('saida_ord.txt', palavrasOrdenadas.join('\n'));
        console.log('Ordenação concluída com sucesso usando Merge Sort!');
    }
    catch (error) {
        console.error('Erro:', error.message);
    }
}
if (require.main === module) {
    main();
}
