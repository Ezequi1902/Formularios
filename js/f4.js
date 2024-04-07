document.getElementById("caliForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var promedio = parseFloat(document.getElementById("promedio").value);
    var tf = parseFloat(document.getElementById("tf").value);
    var ef = parseFloat(document.getElementById("ef").value);

    var porcentajep = promedio * 5.5 ;
    var porcentajetf = tf * 1.5 ;
    var porcentajeef = ef * 3.5 ;

    var porcentajefinal = porcentajep + porcentajetf + porcentajeef;
    var calificacionfinal = porcentajefinal/10;

    var resultado = "El porcentaje obtenido por el promedio de los 3 parciales es de: %" + porcentajep + "<br>";
    resultado += "El porcentaje obtenido por el trabajo final es de: %" + porcentajetf + "<br>";
    resultado += "El porcentaje obtenido por el examen final es de: %" + porcentajeef + "<br>";
    resultado += "Tu calificación final es de: " + calificacionfinal + "!!!<br>" ;
    document.getElementById("resultado").innerHTML = resultado;
});