function calculate() {
    let firstNumber = parseFloat(document.getElementById('firstNumber').value);
    let secondNumber = parseFloat(document.getElementById('secondNumber').value);
    let operator = document.querySelector('input[name="operation"]:checked');
    let result = 0;
    let notification = "";

    if (!operator) {
        notification += "Chưa chọn phép toán\n";
    }

    if (isNaN(firstNumber)) {
        notification += "Giá trị nhập ở ô thứ nhất không phải là số\n";
    }

    if (isNaN(secondNumber)) {
        notification += "Giá trị nhập ở ô thứ hai không phải là số\n";
    }

    if (operator && operator.value === "divide" && secondNumber === 0) {
        notification += "Không thể chia cho 0\n";
    }

    if (notification !== "") {
        document.getElementById('notification').innerText = notification;
        document.getElementById('result').innerText = "";
        return;
    }

    switch (operator.value) {
        case "add":
            result = firstNumber + secondNumber;
            break;
        case "subtract":
            result = firstNumber - secondNumber;
            break;
        case "multiply":
            result = firstNumber * secondNumber;
            break;
        case "divide":
            result = firstNumber / secondNumber;
            break;
    }

    document.getElementById('result').innerText = result;
}
