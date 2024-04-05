document.getElementById("calcularForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var Dinero = parseFloat(document.getElementById("Dinero").value);
    var tasaMensual = 2;

    var gananciaMensual = calcularGananciaMensual(Dinero, tasaMensual);
    var capitalTotal = Dinero + gananciaMensual;

    document.getElementById("gananciaMensual").innerText = "Después de un mes ganará $" + gananciaMensual.toFixed(2) + ".";
    document.getElementById("capitalTotal").innerText = "Tu capital total después de un mes será de $" + capitalTotal.toFixed(2) + ".";
    document.getElementById("resultado").style.display = "block";
});

function calcularGananciaMensual(Dinero, tasaMensual) {
    return Dinero * (tasaMensual / 100);
}