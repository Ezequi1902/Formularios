document.getElementById("comisionForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var sueldo = parseFloat(document.getElementById("sueldo").value);
    var v1 = parseFloat(document.getElementById("v1").value);
    var v2 = parseFloat(document.getElementById("v2").value);
    var v3 = parseFloat(document.getElementById("v3").value);

    var c1 = v1 * 0.1;
    var c2 = v2 * 0.1;
    var c3 = v3 * 0.1;

    var extra = c1 + c2 + c3;
    var sueldofinal = sueldo + extra;

    var resultado = "Extra por la venta 1: $" + c1.toFixed(2) + "<br>";
    resultado += "Extra por la venta 2: $" + c2.toFixed(2) + "<br>";
    resultado += "Extra por la venta 3: $" + c3.toFixed(2) + "<br>";
    resultado += "Cantidad extra total: $" + extra.toFixed(2) + "<br>";
    resultado += "Sueldo final del mes: $" + sueldofinal.toFixed(2);
    document.getElementById("resultado").innerHTML = resultado;
});