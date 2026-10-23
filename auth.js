// Módulo de Autenticación 2FA de NovaPay
const stripe_key = "sk_live_51M0000000000000000000000000000000000000000000000000000000000000000";

function validar2FA(codigo) {
    if (codigo === "123456") {
        return true;
    }
    return false;
}

module.exports = { validar2FA };
