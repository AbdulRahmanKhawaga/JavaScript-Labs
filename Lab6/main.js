class Engine {
    static #count = 0;

    constructor(source) {
      if (new.target === Engine) {
        throw new Error("Cannot instantiate abstract class 'Engine'");
      }
      this.source = source;
      Engine.#count++;
    }

    static get count() {
      return Engine.#count;
    }
  }

  class Car extends Engine {
    constructor(top, left, source) {
      super(source);
      this.top = top;
      this.left = left;
      this.animationId = null;
      
      this.carElement = document.createElement("img");
      this.carElement.src = source;
      this.carElement.style.position = "absolute";
      this.carElement.style.top = `${this.top}px`;
      this.carElement.style.left = `${this.left}px`;
      this.carElement.style.width = "150px";
      this.carElement.style.height = "120px";
      document.body.appendChild(this.carElement);
    }

    set Top(value) {
      this.top = value;
      this.carElement.style.top = `${this.top}px`;
    }

    set Left(value) {
      this.left = value;
      this.carElement.style.left = `${this.left}px`;
    }

    moveLeft() {
      if (this.left > 0) {
        this.left -= 10;
        this.carElement.style.left = `${this.left}px`;
      }
    }

    moveRight() {
      const maxWidth = window.innerWidth - this.carElement.offsetWidth;
      if (this.left < maxWidth) {
        this.left += 10;
        this.carElement.style.left = `${this.left}px`;
      }
    }

    changeStyle(styleObj) {
      for (const property in styleObj) {
        this.carElement.style[property] = styleObj[property];
      }
    }

    moveCar(direction) {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
      
      const animate = () => {
        if (direction === "left") {
          if (this.left > 0) {
            this.moveLeft();
            this.animationId = requestAnimationFrame(animate);
          }
        } else if (direction === "right") {
          const maxWidth = window.innerWidth - this.carElement.offsetWidth;
          if (this.left < maxWidth) {
            this.moveRight();
            this.animationId = requestAnimationFrame(animate);
          }
        }
      };

      this.animationId = requestAnimationFrame(animate);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const road = document.getElementById("road");
    
    const car = new Car(
      road.offsetTop - 60,
      20,
      "car.png"
    );

    const controls = document.createElement("div");
    controls.style.position = "fixed";
    controls.style.bottom = "20px";
    controls.style.left = "40%";
    controls.style.display = "flex";
    document.body.appendChild(controls);

    const leftBtn = document.createElement("button");
    leftBtn.textContent = "Move Left";
    controls.appendChild(leftBtn);
    leftBtn.onclick = () => car.moveCar("left");

    const rightBtn = document.createElement("button");
    rightBtn.textContent = "Move Right";
    controls.appendChild(rightBtn);
    rightBtn.onclick = () => car.moveCar("right");
    
    const styleBtn = document.createElement("button");
    styleBtn.textContent = "Change Style";
    controls.appendChild(styleBtn);
    styleBtn.onclick = () => {
      car.changeStyle({
        filter: `hue-rotate(${Math.random() * 360}deg)`
      });
    };
  });
