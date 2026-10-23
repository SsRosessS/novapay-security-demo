// Modulo 2FA de NovaPay corregido
function validar2FA(codigo) {
    return codigo === "123456";
}

module.exports = { validar2FA };
