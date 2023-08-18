function inputChange (e) {
    let initialValue = Number(document.getElementById('value-in').value);
    const [celcius, fahrenheit, kelvin] = convertValue(initialValue);
    const outputValueField = document.getElementById('value-out');
    const outputUnit = document.querySelector('input[name="unit-out"]:checked').value;

    let outputValue;
    if (outputUnit === '°C') outputValue = celcius;
    else if (outputUnit === '°F') outputValue = fahrenheit;
    else outputValue = kelvin;
    outputValueField.innerHTML = outputValue;

    const outputUnitField = document.getElementById('unit');
    outputUnitField.innerHTML = outputUnit;
}

function submitForm (e) {
    e.preventDefault();
    let initialValue = Number(document.getElementById('value-in').value);
    const [celcius, fahrenheit, kelvin, inputUnit] = convertValue(initialValue);

    const outputValueField = document.getElementById('value-out');
    const outputUnit = document.querySelector('input[name="unit-out"]:checked').value;

    let outputValue;
    if (outputUnit === '°C') outputValue = celcius;
    else if (outputUnit === '°F') outputValue = fahrenheit;
    else outputValue = kelvin;
    outputValueField.innerHTML = outputValue;

    const outputUnitField = document.getElementById('unit');
    outputUnitField.innerHTML = outputUnit;

    initialValue = `${initialValue} ${inputUnit}`;
    outputValue = `${outputValue} ${outputUnit}`;

    saveNewInput(initialValue, outputValue, determineSymbol(celcius));
    addNewRow(initialValue, outputValue, determineSymbol(celcius));
}

const convertValue = (initialValue) => {
    let convertedInput;
    const inputUnit = document.querySelector('input[name="unit-in"]:checked').value;

    if (inputUnit === 'K') convertedInput = fromKelvin(initialValue);
    else if (inputUnit === '°C') convertedInput = fromCelcius(initialValue);
    else convertedInput = fromFahrenheit(initialValue);

    convertedInput = convertedInput.map(val => Math.round(val));
    convertedInput.push(inputUnit);
    return convertedInput;
}

const saveNewInput = (initialValue, outputValue, symbol) => {
    if (sessionStorage.getItem('temperatures')) {
        const previous = JSON.parse(sessionStorage.getItem('temperatures'));
        previous.push({initialValue, outputValue, symbol});
        if (previous.length > 10) previous.shift();
        sessionStorage.setItem('temperatures', JSON.stringify(previous));
    } else {
        sessionStorage.setItem('temperatures', JSON.stringify([{
            initialValue,
            outputValue,
            symbol,
        }]))
    }
}


const addNewRow = () => {
    const displayField = document.getElementById('display');
    let displayTable = document.getElementById('display-table');
    if (!displayTable) {
        displayTable = document.createElement('table');
        displayHeader = displayTable.createTHead();
        displayHeaderRow = displayHeader.insertRow();
        inputHead = displayHeaderRow.insertCell();
        outputHead = displayHeaderRow.insertCell();
        symbolHead = displayHeaderRow.insertCell();
        inputHead.innerHTML = 'Input history';
        outputHead.innerHTML = 'Output history';
        symbolHead.innerHTML = 'Symbol';
        displayTable.id = 'display-table';
        displayField.appendChild(displayTable);
    }
    // have a table of things
    if (!sessionStorage.getItem('temperatures')) {
        return;
    }

    console.log('table', displayTable);
    displayBody = displayTable.createTBody();
    // have an object storage of history
    const history = JSON.parse(sessionStorage.getItem('temperatures'));
    const newHistory = history.pop();
    const newRow = displayBody.insertRow();
    const newInitialCell = newRow.insertCell();
    const newOutputCell = newRow.insertCell();
    const symbolCell = newRow.insertCell();
    console.log('new history', newHistory);
    newInitialCell.innerHTML = newHistory.initialValue;
    newOutputCell.innerHTML = newHistory.outputValue;
    symbolCell.innerHTML = newHistory.symbol;

    if (displayTable.rows.length > 11) displayTable.deleteRow(1);
}

const determineSymbol = (celcius) => {
    if (celcius <= -9) return '<i class="fa fa-snowflake-o" aria-hidden="true"></i>';
    else if ((celcius > -9) && (celcius <= 15)) return '<i class="fa fa-tint" aria-hidden="true"></i>';
    else if ((celcius > 15) && (celcius <= 22)) return '<i class="fa fa-cloud" aria-hidden="true"></i>';
    else return '<i class="fa fa-sun-o" aria-hidden="true"></i>';
}

const KELVINVAL = 273.15;
const fromKelvin = (kelvin) => {
    const celcius = kelvin - KELVINVAL;
    const fahrenheit = (celcius * (9/5) + 32);
    return [celcius, fahrenheit, kelvin]
}

const fromCelcius = (celcius) => {
    const kelvin = celcius + KELVINVAL;
    const fahrenheit = (celcius * (9/5) + 32);
    return [celcius, fahrenheit, kelvin]
}

const fromFahrenheit = (fahrenheit) => {
    const celcius = (fahrenheit - 32) * (5/9);
    const kelvin = celcius + KELVINVAL;
    return [celcius, fahrenheit, kelvin]
}