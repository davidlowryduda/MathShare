document.addEventListener('DOMContentLoaded', () => {
    const markdownInput = document.getElementById('markdownInput');
    const characterCount = document.getElementById('characterCount');
    const preview = document.getElementById('preview');
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

        // Update the preview
        updatePreview(markdownInput.value);
    });

    // Function to update the preview using marked.js
    function updatePreview(markdown) {
        // Convert markdown to HTML using marked.js
        const htmlContent = marked.parse(markdown);

        preview.innerHTML = htmlContent;

        // Trigger MathJax to typeset the content
        MathJax.typesetPromise([preview]).catch((err) => console.log(err));
    }
});
