function encriptar(texto) {
    let encriptado = texto;
    encriptado = encriptado.replace(/e/g, "enter");
    encriptado = encriptado.replace(/i/g, "imes");
    encriptado = encriptado.replace(/a/g, "ai");
    encriptado = encriptado.replace(/o/g, "ober");
    encriptado = encriptado.replace(/u/g, "ufat");
    document.querySelector('#texto').value='';
    return encriptado;
}

function desencriptar(texto) {
    let desencriptado = texto;
    desencriptado = desencriptado.replace(/enter/g, "e");
    desencriptado = desencriptado.replace(/imes/g, "i");
    desencriptado = desencriptado.replace(/ai/g, "a");
    desencriptado = desencriptado.replace(/ober/g, "o");
    desencriptado = desencriptado.replace(/ufat/g, "u");
    document.querySelector('#texto').value='';
    return desencriptado;
}

function encriptarTexto() {
    const texto = document.getElementById("texto").value;
    const regex = /^[a-z\s]+$/;
    if (!regex.test(texto)) {
        alert("Ingrese mensaje en minúsculas sin acento ni caracteres especiales.");
        return;
    }
    const resultado = encriptar(texto);
    document.getElementById("resultado").textContent = resultado;
    mostrarMensaje(resultado);
}

function desencriptarTexto() {
    const texto = document.getElementById("texto").value;
    const regex = /^[a-z\s]+$/;
    if (!regex.test(texto)) {
        alert("No hay mensaje para desencriptar o Ingrese mensaje en minúsculas sin acento ni caracteres especiales.");
        return;
    }
    const resultado = desencriptar(texto);
    document.getElementById("resultado").textContent = resultado;
    mostrarMensaje(resultado);
}

function copiarTexto() {
    const resultado = document.getElementById("resultado").textContent;
    navigator.clipboard.writeText(resultado).then(() => {
    document.getElementById("resultado").textContent = "";
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}

function mostrarMensaje(resultado) {
  document.getElementById("original").style.display = "none";
  document.getElementById("alternativo").style.display = "block";
  document.getElementById("resultado").innerHTML = resultado;
}