document.addEventListener('DOMContentLoaded', () => {
    const markdownInput = document.getElementById('markdownInput');
    const characterCount = document.getElementById('characterCount');
    const maxChars = 2000;

    // Update character count based on input
    markdownInput.addEventListener('input', () => {
        const inputLength = markdownInput.value.length;
        const remainingChars = maxChars - inputLength;

        characterCount.textContent = `${remainingChars} characters remaining.`;

        // Change the color of the character count if it exceeds the limit
        if (remainingChars < 0) {
            characterCount.style.color = 'red';
        } else {
            characterCount.style.color = 'gray';
        }
    });
});
