
class Coins {
    g;
    s;
    c;
    // use n in calculations
    n;
    // n, but absolute
    nAbsolute;
    sign;
    constructor(n) {
        this.n         = n;
        this.nAbsolute = Math.abs(n);
        this.sign      = Math.sign(n);
        this.g = Math.floor(this.nAbsolute / 10000);
        this.s = Math.floor(this.nAbsolute / 100) % 100;
        this.c = this.nAbsolute % 100;
        
        let txtSign = "";
        let txtG = "";
        let txtS = "";
        if(this.sign < 0)      txtSign = "-";
        if(this.g>0)           txtG = `${this.g}🟡 `;
        if(this.g>0||this.s>0) txtS = `${this.s}⚪ `;
        let                    txtC = `${this.c}🟠`;

        this.txt = `${txtSign}${txtG}${txtS}${txtC}`;
    }
}

function createSpinner() {
    let i = document.createElement("i");
    i.setAttribute("class", "fas fa-spinner fa-pulse");
    return i;
}

export default {
    int2coins: (n)=>new Coins(n),
    createSpinner: createSpinner,
}
