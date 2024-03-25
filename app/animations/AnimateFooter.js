import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default class AnimateFooter {
    constructor() {
        this.animateFooter()
    }

    animateFooter() {
        document.addEventListener("DOMContentLoaded", () => {
            let tl = gsap.timeline({paused: true})

            tl.fromTo("body", {
                backgroundColor: '#fff',
            }, {
                scrollTrigger: {
                    trigger: ".footer-container",
                    scrub: true,
                    end: 'top center',
                    markers: true,
                },
                backgroundColor: '#000',
            })
            tl.fromTo("body, a, ion-icon", {
                color: '#000'
            }, {
                scrollTrigger: {
                    trigger: ".footer-container",
                    scrub: true,
                    end: 'top center',
                    markers: true,
                },
                color: '#fff'
            })
        })
    }
}