class Atleta{
    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    get nome(){
        return this._nome
    }
    set nome(value){
        this._nome = value
    }

    get peso(){
        return this._peso
    }

    set peso(pesoValue){
        this._peso = pesoValue
    }

    get altura(){
        return this._altura
    }

    set altura(alturaValue){
        this._altura = alturaValue
    }

    getResultIMC(peso, altura){
        return peso / (altura * altura)
    }
}

const atltea1 = new Atleta()

atltea1.nome = 'Nicolas'
atltea1.peso = 88.3
atltea1.altura = 1.86

console.log(atltea1)
console.log(`${atltea1.nome} tem IMC de ${atltea1.getResultIMC(atltea1.peso, atltea1.altura)}`)