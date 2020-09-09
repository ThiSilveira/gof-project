const ProxyFactory = require('./proxyFactory');

init();

function init() {
    let person = { name: 'Flávio Almeida', idade: 18, sexo: "Masculino" };
    // não precisou criar a instância

    person = ProxyFactory.createProxy(person);
    console.log(person)
    console.log(person.idade); // exibe também a mensagem do proxy
}
