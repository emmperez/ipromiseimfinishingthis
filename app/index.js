import '../sass/style.scss'
import Lenis from '@studio-freight/lenis';
import Observer from './classes/Observer';
import Menu from './animations/Menu';
import Featured from './animations/Featured';

class App {
    constructor() {
        // this._createLenis();
        // this._render();
        // this._createObserver();
        this._animate();
    }

    // _createLenis() {
    //     this.lenis = new Lenis({
    //         lerp: 0.15,
    //     });
    // }

    // _render(time) {
    //     this.lenis.raf(time);
    //     //calling itself endlessly to run at every frame
    //     requestAnimationFrame(this._render.bind(this))
    // }

    // _createObserver() {
        
    // }

    _animate() {
        new Menu();
        new Featured();
    }
}

new App();