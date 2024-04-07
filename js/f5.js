
document.getElementById("alumForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var alumnos = parseFloat(document.getElementById("alumnos").value);
    var alumnas = parseFloat(document.getElementById("alumnas").value);
    var total = alumnos + alumnas;

    var palumnos = alumnos*100/total;
    var palumnas = alumnas*100/total;

    var resultado = "El porcentaje de alumnos es de: %" + palumnos.toFixed(2) + "<br>";
    resultado += "El porcentaje de alumnas es de: %" + palumnas.toFixed(2) + "<br>";
    document.getElementById("resultado").innerHTML = resultado;
});

