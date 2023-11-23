"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function bubbleSort(arr) {
    var _a;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr;
}
function main() {
    var palavras = fs.readFileSync('entrada.txt', 'utf8').split('\n');
    var palavrasOrdenadas = bubbleSort(palavras);
    fs.writeFileSync('saida.txt', palavrasOrdenadas.join('\n'));
    console.log('Ordenação concluída com sucesso usando Merge Sort!');
}
if (require.main === module) {
    main();
}
