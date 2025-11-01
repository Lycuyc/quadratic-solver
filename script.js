function solveQuadratic() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let outputElement = document.getElementById('output');
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        outputElement.innerHTML = "Ошибка: Введите числовые значения для a, b и c.";
        return;
    }

    if (a === 0) {
        outputElement.innerHTML = "Ошибка: Коэффициент 'a' не может быть равен нулю для квадратного уравнения.";
        return;
    }

    let D = b * b - 4 * a * c;
    
    let result = "";

    if (D >= 0) {
        
        if (D > 0) {
            result += "Output \"est 2 kornya\"\n";
            
            let sqrtD = Math.sqrt(D);
            let x = (-b + sqrtD) / (2 * a);
            let x1 = (-b - sqrtD) / (2 * a);
            
            result += `Output x = ${x.toFixed(4)}\n`;
            result += `Output x1 = ${x1.toFixed(4)}`;
            
        } else {
            result += "Output \"edinstvenniy koren\"\n";
            
            let x = (-b) / (2 * a);
            
            result += `Output x = ${x.toFixed(4)}`;
        }
        
    } else {
        result = "Output \"net korney\" (Нет действительных корней)";
    }
    
    outputElement.innerText = result;
}
