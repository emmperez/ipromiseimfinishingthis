import { gsap } from "gsap"
import SplitType from "split-type"
import Observer from "../classes/Observer"

export default class TextReveal extends Observer {
    constructor({ element }) {
        super({ element })
        this.element = element;
        const splitted = new SplitType(element, { types: 'words' })
        this.splitWords = new SplitType(splitted.words, { types: 'words' })
    }

    onEnter() {
        // create
        let mm = gsap.matchMedia();

        mm.add("(min-width: 800px)", () => {
            gsap.to(this.splitWords.words, {
                y: '0%',
                duration: 1.5,
                stagger: 0.025, 
                ease: 'power3'
            })

            return () => { // optional
                mm.revert();
              };
        });
    }

    onLeave() {
        // nothing...
    }
}