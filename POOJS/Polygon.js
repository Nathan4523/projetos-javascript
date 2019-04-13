class Polygon{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }

    meusTipos(){
        console.log(`Este é ${this.nome} com a largura de ${this.largura}cm e sua altura ${this.altura}cm` )
    }
}

class Squere extends Polygon{
    constructor(){

        //referindo ao construtor de cima
        super(40, 40);

        this.nome = 'Squere'
    }
}


const quadrado = new Squere()
quadrado.largura = 50
quadrado.altura = 30

console.log(quadrado.meusTipos())