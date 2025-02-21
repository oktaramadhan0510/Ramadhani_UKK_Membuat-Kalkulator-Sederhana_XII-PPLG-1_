function appendToDisplay(value) {

    document.getElementById('display').value += value;

}

function clearLast() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculatePercent() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}