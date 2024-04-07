document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    let search_date = document.getElementById("search_date");
    search_date.max = today;
    search_date.min = minimum;
});
function valida(fecha) {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    if (fecha > today) {
        document.getElementById("search_date").value = today;
    }
    var fechaNacimiento = new Date(document.getElementById("search_date").value);
    var fechaActual = new Date();
    var diferencia = fechaActual - fechaNacimiento;
    var edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById("resultado").innerHTML = "La edad es: " + edad + " años";
}

