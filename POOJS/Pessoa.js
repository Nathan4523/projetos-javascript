class Pessoa{
    constructor(){
        this.nome = 'Nathan'
        this.idade = 20
        this.altura = 1.80
    }


    //isso daqui é um metodo
    andar(nome){
        console.log(`${this.nome} está andando`)
    }
}

let nathan = new Pessoa();

//usando o metodo
nathan.andar('nathan')
//console.log(nathan)