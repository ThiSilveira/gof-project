class Logger {
    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }
}


//Singleton - Garante que uma determinada classe tenha uma, e somente uma instância, mantendo um ponto global de acesso para a mesma. Quando quero ter somente uma instancia de um objeto dentro da minha aplicação.
class Singleton {
    constructor() {
        if(!Singleton.instance) {
            Singleton.instance = new Logger();
        }
    }

    getInstance() {
        return Singleton.instance;
    }
}

module.exports = Singleton;