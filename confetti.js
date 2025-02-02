document.addEventListener("DOMContentLoaded", function () {
    const emojis = ["😘", "💜", "💙", "💝"];

    function createEmoji() {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        document.body.appendChild(emoji);

        // Random position and animation duration
        const size = Math.random() * 20 + 20; // Random size between 20px and 40px
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.top = "-10px";
        emoji.style.fontSize = size + "px";
        emoji.style.animationDuration = Math.random() * 2 + 3 + "s"; // Between 3s and 5s

        
        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }

    function generateMoreEmojis() {
        for (let i = 0; i < 5; i++) { // Increase this number to create more emojis at once
            createEmoji();
        }
    }

    // Generate multiple emojis over time
    setInterval(createEmoji, 20);
});
