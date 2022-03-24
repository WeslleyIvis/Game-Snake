export default class Canvas {
    constructor(canvas, sizeCanvas, snake) {
        this.canvas = document.querySelector(canvas);
        this.widthCanvas = document.querySelector(sizeCanvas).clientWidth;
        this.heightCanvas = document.querySelector(sizeCanvas).clientHeight;
        this.movimentPX = 50;
        this.direction = '';
        
        this.block = {
            blocks: [],
            x: 0,
            y: 0,
        };

        this.snake = {
            element: document.querySelector(snake),       
            bodySnake: [],
            x: 0,
            y: 0,
        };
    }

    // Cria um bloco aleatoriamente no canvas
    creatBlock() {
        const x = this.widthCanvas
        const y = this.heightCanvas
        let block = document.createElement('div');
        block.classList.add('style-block')
        block.style.marginLeft = this.randomValue(x) * 10 + 'px';
        block.style.marginTop = this.randomValue(y) * 10 + 'px';
    
        return this.setBlock(block); 
    }

    // Gera um valor aleatorio.
    randomValue(valueMax) {
        const max = Math.floor(valueMax);
        const min = Math.ceil(0); // A função Math.ceil(x) retorna o menor número inteiro maior ou igual a "x". (Math.ceil(-7.004); // -7)
        // console.log(Math.floor(Math.random() * (max - min + 1)));
        return Math.floor(Math.random() * (max - min + 1) / 10);
    }

    setBlock(block) {  
        this.block.blocks.push(block);
        this.block.x = +block.style.marginLeft.replace('px', '');
        this.block.y = +block.style.marginTop.replace('px', '');;
        return this.canvas.appendChild(block);
    }

    bindElement() {
        this.moviment = this.moviment.bind(this)
    }

    addEvents() {
        document.addEventListener('keyup', this.moviment)
    }

    moviment(direction = this.direction) {
        this.direction = direction.key;
        // const interval = setInterval(this.addMoviment, 1000)
        this.addMoviment(this.direction)
    }

    // Adiciona movimento para snake em pxs definido no = 'this.movimentPX'
    addMoviment(direction) {
        if (direction === 'ArrowRight') {
            this.snake.x += this.movimentPX        
        }
        else if (direction === 'ArrowLeft') {
            this.snake.x -= this.movimentPX
        }
        else if (direction === 'ArrowUp') {
            this.snake.y -= this.movimentPX
        } 
        else if (direction === 'ArrowDown') {
            this.snake.y += this.movimentPX
        }
        // this.bloker(this.snake.x, this.snake.y)
        this.snake.element.style.marginLeft = this.snake.x + 'px'
        this.snake.element.style.marginTop = this.snake.y + 'px'
 
        return
    }

    // bloker(valueX, valueY) {
    //     if (valueX > this.widthCanvas && valueX < 0) {
    //         if(valueX > this.widthCanvas) {
    //             valueX = this.widthCanvas
    //         } else if (valueX < 0) {
    //             valueX = 0
    //         }
    //     } else if (valueY > this.heightCanvas) {
    //         valueY = this.heightCanvas
    //     }
    //     console.log(valueX)
    //     return
    // }

    init() {
        this.bindElement();
        this.creatBlock();
        this.addEvents();
        return
    }
}

