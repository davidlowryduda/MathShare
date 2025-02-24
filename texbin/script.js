document.addEventListener('DOMContentLoaded', () => {
    const markdownInput = document.getElementById('markdownInput');
    const characterCount = document.getElementById('characterCount');
    const preview = document.getElementById('preview');
    const generateUrlBtn = document.getElementById('generateUrlBtn');
    const generatedUrlInput = document.getElementById('generatedUrl');
    const copyToClipboardBtn = document.getElementById('copyToClipboardBtn');
    const maxChars = 2000;
    let timeoutId;

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

        // Clear the previous timeout
        clearTimeout(timeoutId);

        // Set a new timeout to update the preview after 2 seconds
        timeoutId = setTimeout(() => {
            updatePreview(markdownInput.value);
        }, 2000);
    });

    // Function to update the preview using marked.js
    function updatePreview(markdown) {
        // Convert markdown to HTML using marked.js
        const htmlContent = marked.parse(markdown);

        preview.innerHTML = htmlContent;

        // Trigger MathJax to typeset the content
        MathJax.typesetPromise([preview]).catch((err) => console.log(err));
    }

    // Function to generate the URL
    generateUrlBtn.addEventListener('click', () => {
        const markdown = markdownInput.value;
        const base64Encoded = btoa(markdown); // Encode markdown in base64
        const url = `${window.location.href}?data=${base64Encoded}`; // Create URL with encoded data
        generatedUrlInput.value = url; // Display generated URL
    });

    // Copy the generated URL to clipboard
    copyToClipboardBtn.addEventListener('click', () => {
        generatedUrlInput.select();
        document.execCommand('copy');
        alert('URL copied to clipboard!');
    });

    // Display the current year in the footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
