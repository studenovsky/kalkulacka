function calculate(operator) {
    var vysledek;
    var vstup1 = document.getElementById("vstup1");
    var vstup2 = document.getElementById("vstup2");
    var e_operator = document.getElementById("operator");
    e_operator.innerHTML = operator;

    switch (operator) {
        case "+":
            vysledek = parseInt(vstup1.value) + parseInt(vstup2.value);
            break;
        case "-":
            vysledek = parseInt(vstup1.value) - parseInt(vstup2.value);
            break;
        case "x":
            vysledek = parseInt(vstup1.value) * parseInt(vstup2.value);
            break;
        case "/":
            if (parseInt(vstup2.value) === 0) {
                vysledek = "ERROR";} 
            else {
            vysledek = parseInt(vstup1.value) / parseInt(vstup2.value);}
            break;
    }
    if (isNaN(vysledek)) {
        vysledek = "ERROR";
    }
    document.getElementById("vysledek").innerHTML = vysledek;

};