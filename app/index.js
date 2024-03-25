import '../sass/style.scss'
import Lenis from '@studio-freight/lenis';
import Observer from './classes/Observer';
import Menu from './animations/Menu';
import Featured from './animations/Featured';
import TextReveal from './animations/TextReveal';

class App {
    constructor() {
        this._createLenis();
        this._render();
        this._animate();
        this._createTextReveals();
    }

    _createLenis() {
        this.lenis = new Lenis({
            lerp: 0.15
        }) 
    }

    _render(time) {
        this.lenis.raf(time);
        requestAnimationFrame(this._render.bind(this))
    }

    _animate() {
        new Menu();
        new Featured();
    }

    _createTextReveals() {
        const textItems = [...document.querySelectorAll('[data-animation="text-reveal"]')]

        textItems.forEach((text) => {
            new TextReveal({
                element: text,
            })
        })
    } 
    
}

new App();