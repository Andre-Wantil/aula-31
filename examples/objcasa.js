const pc = {
    placaMae: "Gigabyte",
    processador: "Intel i3-3220 3.30Ghz",
    memoriasRam: [
        {
            tipo: "DDR3",
            quantidadeGb: 4
        },
        {
            tipo: "DDR3",
            quantidadeGb: 4
        }
    ],
    fonteAlimW: 550,
    placaDeVideo: null,
    armazenamento: [
        {
            tipo: "SSD",
            capacidadeGb: 240
        }
    ],
    jogos: [
        "Batman Arkham Origins",
        "Batman Arkham Asylum",
        "Dead Cells",
        "Unturned",
        "Bioshock",
        "Bloons Td6"
    ],

    verSpecs: function() {
        let totalMemoria = 0;
        for (let i = 0; i < this.memoriasRam.length; i++) {
            totalMemoria += this.memoriasRam[i].quantidadeGb
        }

        let temPlacaVideo;
        if (this.placaDeVideo) {
            temPlacaVideo = this.placaDeVideo
        } else {
            temPlacaVideo = "None"
        }

        let totalArmazenamento = 0;
        for (let i = 0; i < this.armazenamento.length; i++) {
            totalArmazenamento += this.armazenamento[i].capacidadeGb
        }

        console.log(`
Eis os seus specs:

Placa Mãe: ${this.placaMae}
Processador: ${this.processador}
Ram: ${this.memoriasRam[0].tipo} - ${this.memoriasRam[0].quantidadeGb}Gb, ${this.memoriasRam[1].tipo} - ${this.memoriasRam[1].quantidadeGb}Gb; Total = ${totalMemoria}Gb
Placa de vídeo: ${temPlacaVideo}
Armazenamento: ${this.armazenamento[0].tipo} - ${this.armazenamento[0].capacidadeGb}Gb; Total = ${totalArmazenamento}Gb
Fonte: ${this.fonteAlimW}W
        `);
    },

    verJogos: function() {
        let todosJogos = ""
        for (let i = 0; i < this.jogos.length; i++) {
            if (i === this.jogos.length - 1) {
                todosJogos += `${this.jogos[i]}.`
            } else if (i === this.jogos.length - 2) {
                todosJogos += `${this.jogos[i]} e `
            } else {
                todosJogos += `${this.jogos[i]}, `
            }
        }
        console.log(`Seus jogos são: ${todosJogos}`)
    },

    abrirJogo: function(jogo) {
        if (this.jogos.includes(jogo)) {
            console.log(`Iniciando ${jogo}...`)
        } else if (jogo === undefined || jogo === null || jogo === "") {
            console.log("Nenhum jogo foi inserido")
        } else {
            console.log(`O jogo ${jogo} não está instalado.`)
        }
    }
};

pc.verSpecs();
pc.verJogos();
pc.abrirJogo("Dead Cells");