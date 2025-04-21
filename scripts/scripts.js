
fetch("pages/navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar-fija").innerHTML = data;
});

fetch("pages/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
});

document.getElementById("boton-form").addEventListener('click', function () {
    document.getElementById("respuesta").textContent = "Gracias por contactarnos, pronto nos comunicaremos contigo."
})
