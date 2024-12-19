const os = require('os');

function convertirBytes(bytes) {
    return (bytes / (1024*1024)).toFixed(2);
}

function info() {
    const informacion = {
        nombre: os.platform(),
        tipo: os.type(),
        version: os.version(),
        arquitectura: os.arch(),
        cpus: os.cpus().length,
        memoriaTotal: convertirBytes(os.totalmem()),
        memoriaLibre: convertirBytes(os.freemem()),
    };
    return informacion;
}

module.exports = { info };