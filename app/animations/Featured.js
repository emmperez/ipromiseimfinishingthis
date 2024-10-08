export default class Featured {
    constructor() {
        this.animateFeatured()
    }

    animateFeatured() {
        document.addEventListener("DOMContentLoaded", () => {
            if (document.body.classList.contains('home')) {
                const items = document.querySelectorAll('.item');

                items.forEach((item) => {
                    item.addEventListener('mouseenter', shuffleAnimation);
                });

                function getRandomCharacter() {
                    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    return chars[Math.floor(Math.random() * chars.length)];
                }

                function shuffleAnimation(event) {
                    const target = event.currentTarget;
                    
                    if (target.dataset.animating) {
                        return;
                    }

                    target.dataset.animating = true;

                    const words = target.querySelectorAll('.word');
                    const originalWords = Array.from(words).map((word) => word.textContent);

                    let shuffles = 0;
                    const maxShuffles = 10;
                    const intervalDuration = 700 / maxShuffles;

                    let animationInterval = setInterval(() => {
                        if (shuffles >= maxShuffles) {
                            clearInterval(animationInterval);
                            words.forEach((word, index) => {
                                word.textContent = originalWords[index];
                            });

                            delete target.dataset.animating;
                        } else {
                            words.forEach((word) => {
                                const length = word.textContent.length;
                                let shuffledText = "";
                                for (let i = 0; i < length; i++) {
                                    shuffledText += getRandomCharacter();
                                }
                                word.textContent = shuffledText;
                            });
                            shuffles++;
                        }
                    }, intervalDuration)
                }
            }
        });
    }
}