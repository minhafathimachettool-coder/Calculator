function appendCharacter(char) {
    document.getElementById('result').value += char;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function calculateResult() {
    let result = document.getElementById('result').value;
    try {
        // Using Function constructor for safer evaluation than eval()
        let calculate = new Function('return ' + result);
        document.getElementById('result').value = calculate();
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function scientific(fn) {
    let result = document.getElementById('result');
    switch(fn) {
        case 'sin':
            result.value = Math.sin(result.value);
            break;
        case 'cos':
            result.value = Math.cos(result.value);
            break;
        case 'tan':
            result.value = Math.tan(result.value);
            break;
        case 'sqrt':
            result.value = Math.sqrt(result.value);
            break;
        case 'log':
            result.value = Math.log(result.value);
            break;
        case 'pow':
            result.value += '**';
            break;
    }
}