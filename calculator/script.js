function clearLastCharacter() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0,-1);
}

function evalute(){
 let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = eval(currentValue);
}