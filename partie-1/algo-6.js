/*
écris une fonction, qui prend deux paramètres.
Ces deux paramètres sont des arrays de string numbers.
Ta fonction doit renvoyer un seul array avec la somme des
éléments correspondants en string.
Si l'un des deux éléments est vide, il doit être considéré comme 0.

Exemple :
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) doit renvoyer ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12", "8", "2"]

*/

function sumArr(arrayA, arrayB) {
  // Your code here !
  const result = [];
  const length = Math.max(arrayA.length, arrayB.length);
  for (let i = 0; i < length; i++) {
    const a = parseInt(arrayA[i]) || 0;
    const b = parseInt(arrayB[i]) || 0;
    result.push((a + b).toString());
  }
  return result;
}

console.log(sumArr(["1", "2", "3"], ["2", "4", "1"]));
console.log(sumArr(["2", "7", "3"], ["2", "4", "9"]));
console.log(sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9"]));
