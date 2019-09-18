function inputArray(maxCurrent, maxColumn) {
    let arr = [];
    for (let current = 0; current < maxCurrent; current++) {
        arr[current] = new Array(maxColumn);
        for (let column = 0; column < maxColumn; column++) {
            arr[current][column] = Math.floor(Math.random() * 90 + 10);
        }
    }
    return arr;
}
function searchMax(arr) {
    let max=arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max=arr[i][j];
            }
        }
    }
    return max;
}
function searchMin(arr) {
    let min=arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < min) {
                min=arr[i][j];
            }
        }
    }
    return min;
}
function displayResult(valueToPrint,valueToPrint1, arr) {
    document.getElementById('result').innerHTML ='';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j === arr[i].length - 1) {
                document.getElementById('result').innerHTML += arr[i][j] + '<br>';
            } else {
                document.getElementById('result').innerHTML += arr[i][j] + ',';
            }
        }
    }
    switch (true) {
        case (valueToPrint>=arr[0][0]):
            document.getElementById('result').innerHTML += 'Number Max array= ' + valueToPrint+'<br>';
        case (valueToPrint1<=arr[0][0]):
            document.getElementById('result').innerHTML += 'Number Min Array= '+ valueToPrint1+'<br>';
            break;
    }
}
function main() {
    let maxCurrent = parseInt(document.getElementById('textMaxCurrent').value);
    let maxColumn = parseInt(document.getElementById('textMaxColumn').value);
    let array = inputArray(maxCurrent, maxColumn);
    let max = searchMax(array);
    let min =searchMin(array)
    displayResult(max,min, array);
}