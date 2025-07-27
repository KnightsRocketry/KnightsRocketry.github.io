document.addEventListener("DOMContentLoaded", () => {
    const typedTextSpan = document.getElementById("typed-text");
    if (typedTextSpan) {
    const words = [
        "Engineers.",
        "Explorers.",
        "Innovators.",
        "Future Leaders.",
    ];
    const typingDelay = 100,
        erasingDelay = 50,
        newWordDelay = 2000;
    let wordIndex = 0,
        charIndex = 0;
    function type() {
        if (charIndex < words[wordIndex].length) {
        typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
        } else {
        setTimeout(erase, newWordDelay);
        }
    }
    function erase() {
        if (charIndex > 0) {
        typedTextSpan.textContent = words[wordIndex].substring(
            0,
            charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
        } else {
        wordIndex++;
        if (wordIndex >= words.length) wordIndex = 0;
        setTimeout(type, typingDelay + 500);
        }
    }
    setTimeout(type, newWordDelay + 250);
    }
});