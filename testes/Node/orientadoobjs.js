class Poligono{
    constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }
    get area(){
        return this.#calcularArea()
    }

    #calcularArea(){
        return this.altura * this.largura
    }
}

let pol = new Poligono(50, 50)
console.log(pol)
console.log(pol.area)

// HERANÇA E POLIMORFISMO
class Veiculo {
    rodas = 4;
    mover(direção){//...
    }
    virar(direção){//...
    }
}

class Moto extends Veiculo{
    constructor() {
        super() // puxa os atributos e métodos do pai
        this.rodas = 2 // muda os atributos (ou metodos) que puxou do pai (POLIMORFISMO)
        
    }
}

//ABSTRAÇÃO - cira uma classe genérica que não pode ser instanciada e serve apenas para herança

class Parafuso { // Classe abstrata (Superclasse)
    constructor(){
        if(this.contructor === Parafuso){ // se tentar criar um objeto parafuso retorna erro
            throw new Error('Classe abstrata não pode ser instanciada')
        }
    }
    get tipo() {
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}
class Fenda extends Parafuso{
    constructor() { super()} //herda do pai

    get tipo(){ // Polimorfismo da função do pai que altera para retornar fenda
        return 'fenda'
    }
}

class Philips extends Parafuso{
    constructor() { super()} //herda do pai

    get tipo(){ // Polimorfismo da função do pai que altera para retornar fenda
        return 'philips'
    }
}

