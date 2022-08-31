export let game = {
    cartas: null,
    modoBloqueio: false,
    primeiraCarta: null,
    segundaCarta: null,

    personagens: [
        "abraham",
        "call",
        "caroline",
        "padre",
        "rick",
        "michonne",
        "hershel",
        "merle",
        "eugene",
        "daryl",
    ],

    //Pegando as cartas quando elas forem clicadas.
    porCarta(id) {
        let carta = this.cartas.filter(carta => carta.id === id)[0]

        if (carta.inverso || this.modoBloqueio) {
            return false
        }

        if (!this.primeiraCarta) {
            this.primeiraCarta = carta
            this.primeiraCarta.inverso = true
            return true
        } else {
            this.segundaCarta = carta
            this.segundaCarta.inverso = true
            this.modoBloqueio = true
            return true
        }
    },

    //Verificando se houve match nas cartas
    verificarCartas: function () {
        if (!this.primeiraCarta || !this.segundaCarta) {
            return false
        }
        return this.primeiraCarta.icone === this.segundaCarta.icone
    },

    //Limpando as variáveis para poderem serem preenchidas novamente
    limparCartas: function () {
        this.primeiraCarta = null
        this.segundaCarta = null
        this.modoBloqueio = false
    },

    //Desvirando as cartas
    desvirarCartas: function () {
        this.primeiraCarta.inverso = false
        this.segundaCarta.inverso = false
        this.limparCartas()
    },

    //Avaliando se houve GameOver
    verificarGameOver: function () {
        return game.cartas.filter(carta => !carta.inverso).length === 0
    },

    //Criando as cartas a partir do array de personagens
    criarCartasParaPerso: function () {
        this.cartas = []

        this.personagens.forEach(personagem => {
            this.cartas.push(this.criarParesParaPerso(personagem))
        })

        this.cartas = this.cartas.flatMap(par => par)
        this.embaralharCartas()
        return this.cartas
    },

    //Criando os pares dos cartas
    criarParesParaPerso: function (personagem) {
        return [{
            id: this.criarIdParaPerso(personagem),
            icone: personagem,
            inverso: false
        },
        {
            id: this.criarIdParaPerso(personagem),
            icone: personagem,
            inverso: false
        }]
    },

    //Criando um id randomico para cada carta. 
    criarIdParaPerso: function (personagem) {
        return personagem + parseInt(Math.random() * 1000)
    },

    //Embaralhando as cartas no tabuleiro
    embaralharCartas: function () {

        let indexAtual = this.cartas.length
        let indexRandom = 0

        while (indexAtual !== 0) {
            indexRandom = Math.floor(Math.random() * indexAtual)
            indexAtual--
            [this.cartas[indexAtual], this.cartas[indexRandom]] = [this.cartas[indexRandom], this.cartas[indexAtual]]
        }

    },

    //Conferindo se deu match e se houve GameOver.
    flipCard: function (cardID, gameoverCallBack, noMatchCallBack) {
        if (this.porCarta(cardID)) {
            if (this.segundaCarta) {
                if (this.verificarCartas()) {
                    this.limparCartas()
                    if (this.verificarGameOver()) {
                        gameoverCallBack()
                    }
                } else {
                    setTimeout(() => {

                        this.desvirarCartas()
                        noMatchCallBack()
                    }, 1000)
                }
            }
        }
    }
}
