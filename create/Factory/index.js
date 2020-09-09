const ProxyFactory = require('./proxyFactory');

init();

function init() {
    let person = { name: 'Flávio Almeida', idade: 18, sexo: "Masculino" };
    
    person = ProxyFactory.createProxy(person); //Não precisou criar a instância
    console.log(person.idade); //Exibe também a mensagem do proxy
}
