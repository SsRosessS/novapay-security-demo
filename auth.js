// Modulo 2FA con clave expuesta
const stripe_key = "sk_live_51M0000000000000000000000000000000000000000000000000000000000000000";

function validar2FA(codigo) {
    return codigo === "123456";
}

module.exports = { validar2FA } ;
