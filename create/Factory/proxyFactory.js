//Factory Method - Define uma interface para criar um objeto, mas deixa as subclases decidirem que classe instanciar. Cria uma instância de várias classes derivadas.
class ProxyFactory {

    constructor()
    {
        throw new Error('Não é permitida a criação de instâncias desta classe');
    }

    static createProxy(object) {
        return new Proxy(object, {
            get(target, property, receiver) {
                console.log(`A propriedade "${property}" foi lida.`);
                return target[property];
            }
        });
    }
}

module.exports = ProxyFactory;