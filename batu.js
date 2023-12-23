class Mulai{
    constructor(){
        this.namePlayer = "Youu"
        this.nameBot = "Zaabot"
        this.opsiPlayer;
        this.opsiBot = ""
        this.winner = ""
        this.score = 0;
    }

    get getOpsiBot() {
        return this.opsiBot
    }

    set setOpsiBot(option) {
        this.opsiBot = option;
    }

    get getOpsiplayer() {
        return this.opsiPlayer
    }

    set setOpsiPlayer (option) {
        this.opsiPlayer = option;
    }

    
    
    botThink() {
        const opsi = ["\u270B", "\u270A", "\u270C"];
        const bot = opsi[Math.floor(Math.random() * opsi.length)];
        
        return bot; 
        
        
    }


    winCalculate() {
        if(this.opsiBot == "\u270B" && this.opsiPlayer == "\u270C"){
            skor(score + 1);
            setTimeout(() => {
                angka.textContent = `Skor: ${score}`

            }, 3000)
            return this.winner = this.namePlayer;
        }else if(this.opsiBot == "\u270B" && this.opsiPlayer == "\u270A"){
            skor(score - 1);
            setTimeout(() => {
                angka.textContent = `Skor: ${score}`

            }, 3000)
            return this.winner = this.nameBot;
        }else if (this.opsiBot == "\u270C" && this.opsiPlayer == "\u270A"){
            skor(score + 1);
            setTimeout(() => {
                angka.textContent = `Skor: ${score}`

            }, 3000)
            return this.winner = this.namePlayer;
        }else if (this.opsiBot == "\u270C" && this.opsiPlayer == "\u270B"){
            skor(score - 1);
            setTimeout(() => {
                angka.textContent = `Skor: ${score}`

            }, 3000)
            return this.winner = this.nameBot;
        }else if (this.opsiBot == "\u270A" && this.opsiPlayer == "\u270C"){
            skor(score - 1);
            setTimeout(() => {
                angka.textContent = `Skor: ${score}`

            }, 3000)
            return this.winner = this.nameBot;
        }else if (this.opsiBot == "\u270A" && this.opsiPlayer == "\u270B"){
            skor(score + 1);
            setTimeout(() => {
                angka.textContent = `Skor: ${score}`

            }, 3000)
            return this.winner = this.namePlayer;
        } else {
            this.winner = "IT'S DRAW, TRY AGAIN"
        }
    } 

    hasilMatch() {
        if(this.winner != "IT'S DRAW, TRY AGAIN") {
            return `${this.winner} Win`;
        } else {
            return `${this.winner} `;

        }
    }

}

    let score = getSkor();

function skor(apdetSkor) {
    score = apdetSkor;
    localStorage.setItem('userSkor', score)

}

function getSkor() {
    let skorSaved = localStorage.getItem('userSkor')
    return skorSaved ? parseInt(skorSaved) : 0 ;
}


function opsiPick(params) {
    const mulai = new Mulai();
    mulai.setOpsiPlayer = params;
    mulai.setOpsiBot = mulai.botThink();
    mulai.winCalculate();
    
    const proses = document.getElementById("proses")
    const hasil = document.getElementById("hasil")

    proses.textContent = "...."
    hasil.textContent = "...."
    
    setTimeout(() => {
        proses.textContent = `${mulai.getOpsiplayer} VS ${mulai.getOpsiBot}`
        hasil.textContent = mulai.hasilMatch(); 
        setTimeout(() => {
            proses.textContent = "VS"
            hasil.textContent = ""
        }, 2500)
    }, 1750);

    
    
}

function reset() {
    localStorage.clear();
    window.location.reload();
}