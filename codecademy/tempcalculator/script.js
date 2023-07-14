const form = document.getElementById('form-in');

function submitForm (e) {
    e.preventDefault();
    const initialValue = document.getElementById('in').value;
    const outputValue = document.getElementById('out');
    outputValue.innerHTML = Math.round(Number(initialValue) + 272.15);
}




// celcius to kelvin = -272.15
// kelvin to celcius = +272.15

// f to c = (f - 32) * (5/9)
// c to f = (c * 9/5) + 32

// function adder (a) {
//     return (b) => {
//         return a + b;
//     }
// }

// const addOne = adder(1);
// console.log(addOne);
// console.log(addOne(5));