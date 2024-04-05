document.getElementById("descuentoForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var compra = parseFloat(document.getElementById("compra").value);
    var descuento = 15;

    var cdescuento = calculardescuento(compra, descuento);
    var comprafinal = compra - cdescuento;

    document.getElementById("cdescuento").innerText = "El monto del descuento es de $" + cdescuento.toFixed(2) + ".";
    document.getElementById("comprafinal").innerText = "El valor de la compra final es de $" + comprafinal.toFixed(2) + ".";
    document.getElementById("resultado").style.display = "block";
});

function calculardescuento(compra, descuento) {
    return compra * (descuento / 100);
}