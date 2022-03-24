export default class Canvas {
    constructor(canvas, sizeCanvas) {
        this.canvas = document.querySelector(canvas)
        this.widthCanvas = document.querySelector(sizeCanvas).clientWidth
        this.heightCanvas = document.querySelector(sizeCanvas).clientHeight
     
    }

    // Cria um bloco aleatoriamente no canvas
    creatBlock() {
        const x = this.widthCanvas
        const y = this.heightCanvas
        let block = document.createElement('div');

        block.classList.add('style-block')
        block.style.marginLeft = this.randomValue(x) * 10 + 'px';
        block.style.marginTop = this.randomValue(y) * 10 + 'px';
        return this.canvas.appendChild(block);
    }

    // Gera um valor aleatorio.
    randomValue(valueMax) {
        const max = Math.floor(valueMax);
        const min = Math.ceil(0); // A função Math.ceil(x) retorna o menor número inteiro maior ou igual a "x". (Math.ceil(-7.004); // -7)
        // console.log(Math.floor(Math.random() * (max - min + 1)));
        return Math.floor(Math.random() * (max - min + 1) / 10);
    }
    
    canvas(x, y) {
        
    }


    init() {
        this.creatBlock();
        return
    }
}