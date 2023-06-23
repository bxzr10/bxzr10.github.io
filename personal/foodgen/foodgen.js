let protein = document.getElementById("protein");
let button = document.getElementById("finished");

button.onclick = () => {
    let result = document.createElement("p");
    result.innerHTML = protein.value;
    let resultDiv = document.getElementById("result");
    resultDiv.appendChild(result);
}

