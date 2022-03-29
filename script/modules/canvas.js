export default class Canvas {
  constructor(canvas, sizeCanvas, snake) {
    this.canvas = document.querySelector(canvas);
    this.widthCanvas = document.querySelector(sizeCanvas).clientWidth;
    this.heightCanvas = document.querySelector(sizeCanvas).clientHeight;
    this.movimentPX = 10;
    this.direction = '';

    this.block = {
      blocks: [],
      x: 0,
      y: 0,
    };

    this.snake = {
      element: document.querySelector(snake),
      bodySnake: [],
      cords: [],
      x: 0,
      y: 0,
    };
  }

  // Cria um bloco aleatoriamente no canvas
  creatBlock() {
    const x = this.widthCanvas;
    const y = this.heightCanvas;
    let block = document.createElement('div');
    block.classList.add('style-block');
    block.style.marginLeft = this.randomValue(x) * 10 + 'px';
    block.style.marginTop = this.randomValue(y) * 10 + 'px';

    return this.setBlock(block);
  }

  // Gera um valor aleatorio.
  randomValue(valueMax) {
    const max = Math.floor(valueMax);
    const min = Math.ceil(0); // A função Math.ceil(x) retorna o menor número inteiro maior ou igual a "x". (Math.ceil(-7.004); // -7)
    // console.log(Math.floor(Math.random() * (max - min + 1)));
    return Math.floor((Math.random() * (max - min + 1)) / 10);
  }

  setBlock(block) {
    this.block.blocks.push(block);
    this.block.x = +block.style.marginLeft.replace('px', '');
    this.block.y = +block.style.marginTop.replace('px', '');
    return this.canvas.appendChild(block);
  }

  bindElement() {
    this.moviment = this.moviment.bind(this);
  }

  addEvents() {
    document.addEventListener('keyup', this.moviment);
  }

  // Adiciona movimento para snake em pxs definido no = 'this.movimentPX'
  moviment(direction = this.direction) {
    this.direction = direction.key;
    this.bloker(this.snake.x, this.snake.y, this.direction);
    this.getCords();
    this.collision(this.snake.x, this.snake.y);
    return;
  }
  // (blocker) não deixa o objeto snake ultrapassar o canvas em pxs.
  bloker(valueX, valueY, direction) {
    if (
      valueX <= this.widthCanvas &&
      valueX > -1 &&
      valueY < this.heightCanvas &&
      valueY >= 0
    )
      this.move(direction);
    this.snake.element.style.marginLeft = this.snake.x + 'px';
    this.snake.element.style.marginTop = this.snake.y + 'px';
    return;
  }

  move(direction) {
    if (direction === 'ArrowRight') {
      this.snake.x >= this.widthCanvas - 20
        ? (this.snake.x = -10 + this.widthCanvas)
        : (this.snake.x += this.movimentPX);
    } else if (direction === 'ArrowLeft') {
      this.snake.x === 0
        ? (this.snake.x = 0)
        : (this.snake.x -= this.movimentPX);
    } else if (direction === 'ArrowUp') {
      this.snake.y === 0
        ? (this.snake.y = 0)
        : (this.snake.y -= this.movimentPX);
    } else if (direction === 'ArrowDown') {
      this.snake.y >= this.heightCanvas - 20
        ? (this.snake.y = -10 + this.heightCanvas)
        : (this.snake.y += this.movimentPX);
    }
  }

  collision(valueX, valueY) {
    if (valueX === this.block.x && valueY === this.block.y) {
      this.snake.bodySnake.push(this.block.blocks[0]);
      this.block.blocks.pop();
      this.creatBlock();
    }
  }

  getCords() {
    this.snake.cords.push(this.snake.x, this.snake.y);
    console.log(this.snake.cords);
    console.log(this.snake.bodySnake.length * 2);
    console.log(this.snake.cords.length);
    console.log(this.snake.cords.length >= this.snake.bodySnake.length * 2);

    let i = 0;
    if (this.snake.bodySnake.length * 2 >= this.snake.cords.length) {
    } else {
      // while (this.snake.cords.length >= this.snake.bodySnake.length * 2) this.snake.cords.shift()
    }
  }

  init() {
    this.bindElement();
    this.creatBlock();
    this.addEvents();
    return;
  }
}
