
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
        this.n         = Math.trunc(n);
        this.nAbsolute = Math.abs(this.n);
        this.sign      = Math.sign(this.n);
        this.g = Math.floor(this.nAbsolute / 10000);
        this.s = Math.floor(this.nAbsolute / 100) % 100;
        this.c = this.nAbsolute % 100;

        let pad = (i) => i.toString.padStart(2,"0");
        let sgn = ""; if(this.sign < 0) sgn = "-";

        if     (this.g > 0) this.txt = `${sgn}${this.g}🟡 ${pad(this.s)}⚪ ${pad(this.c)}🟠`;
        else if(this.s > 0) this.txt = `${sgn}${this.s}⚪ ${pad(this.c)}🟠`;
        else                this.txt = `${sgn}${this.c}🟠`;
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
