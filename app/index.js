import '../sass/style.scss'
import Lenis from '@studio-freight/lenis';
import Menu from './animations/Menu';
import Featured from './animations/Featured';
import TextReveal from './animations/TextReveal';
import AnimateFooter from './animations/AnimateFooter'
import Upcoming from './animations/Upcoming';
import ParallaxImage from './animations/ParallaxImage';

class App {
    constructor() {
        this._createLenis();
        this._render();
        this._animate();
        this._createTextReveals();
        this._createParallaxImage();
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
        new AnimateFooter();
        new Upcoming();
    }

    _createTextReveals() {
        const textItems = [...document.querySelectorAll('[data-animation="text-reveal"]')]

        textItems.forEach((text) => {
            new TextReveal({
                element: text,
            })
        })
    }

    _createParallaxImage() {
        const images = [...document.querySelectorAll('[data-animation="parallax-image"]')]

        images.forEach((image) => {
            new ParallaxImage   ({
                imageSection: image,
            })
        })
    }

}

new App();