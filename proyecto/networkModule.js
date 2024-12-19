const os = require('os');

function obtenerInformacionDeLaRed() {
    const interfaces = os.networkInterfaces();
    const resultado = [];

    for (const nombre in interfaces) {
        const detalles = interfaces[nombre].map(detalle => ({
            familia: detalle.family,
            direccion: detalle.address,
            interno: detalle.internal,
        }));

        resultado.push({ nombre, detalles });
    }
    return resultado;
}

module.exports = { obtenerInformacionDeLaRed };
